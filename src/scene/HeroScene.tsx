import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '../theme'
import { heroSheet } from '../theatre/heroProject'
import { poseAt } from './choreography'

const M1 = '#e8a14a'
const M2 = '#3dba8a'
const M3 = '#6b8cff'

function usePrefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function IntroDirector() {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    let cancelled = false
    let frame = 0
    const started = performance.now()

    if (reduced) {
      heroSheet.sequence.position = 2.4
      return
    }

    const runClock = () => {
      const tick = (now: number) => {
        if (cancelled) return
        const t = Math.min((now - started) / 1000, 2.4)
        heroSheet.sequence.position = t
        if (t < 2.4) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    void heroSheet.project.ready
      .then(() => {
        if (cancelled) return
        void heroSheet.sequence.play({ range: [0, 2.4] })
      })
      .catch(() => undefined)

    runClock()

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
    }
  }, [reduced])

  return null
}

function CameraRig() {
  const { camera } = useThree()
  const idle = useRef(0)

  useFrame((_, delta) => {
    const t = Number(heroSheet.sequence.position)
    const { camera: pose } = poseAt(t)
    if (t >= 2.2) idle.current += delta * 0.28
    camera.position.set(pose.x + Math.sin(idle.current) * 0.26, pose.y + Math.cos(idle.current * 0.7) * 0.08, pose.z)
    if ('fov' in camera) {
      camera.fov = pose.fov
      camera.updateProjectionMatrix()
    }
    camera.lookAt(0, 0.58, 0)
  })

  return null
}

function Orb({
  color,
  which,
}: {
  color: string
  which: 'm1' | 'm2' | 'm3'
}) {
  const mesh = useRef<THREE.Mesh>(null)
  const glow = useRef<THREE.Mesh>(null)
  const pulse = useRef(0)

  useFrame((_, delta) => {
    const t = Number(heroSheet.sequence.position)
    const pose = poseAt(t)[which]
    if (!mesh.current) return
    if (t >= 2.2) pulse.current += delta * 1.8
    const breathe = t >= 2.2 ? 1 + Math.sin(pulse.current + (which === 'm2' ? 1.2 : which === 'm3' ? 2.1 : 0)) * 0.045 : 1
    mesh.current.position.set(pose.x, pose.y, pose.z)
    mesh.current.scale.setScalar(pose.scale * breathe)
    if (glow.current) {
      glow.current.position.copy(mesh.current.position)
      glow.current.scale.setScalar(pose.scale * (1.28 + pose.glow * 0.18))
      const mat = glow.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.12 + pose.glow * 0.16
    }
  })

  return (
    <>
      <mesh ref={mesh}>
        <sphereGeometry args={[0.42, 48, 48]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.82}
          roughness={0.18}
          emissive={color}
          emissiveIntensity={0.45}
          clearcoat={0.6}
          clearcoatRoughness={0.2}
        />
      </mesh>
      <mesh ref={glow}>
        <sphereGeometry args={[0.42, 24, 24]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.08}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  )
}

function Core() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    const pose = poseAt(Number(heroSheet.sequence.position)).core
    if (!mesh.current) return
    mesh.current.position.set(pose.x, pose.y, pose.z)
    mesh.current.scale.setScalar(pose.scale * 0.34)
    mesh.current.rotation.y += delta * 1.15
    mesh.current.rotation.x += delta * 0.45
    const mat = mesh.current.material as THREE.MeshStandardMaterial
    mat.emissiveIntensity = 0.4 + pose.glow * 0.9
  })

  return (
    <mesh ref={mesh}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" metalness={0.7} roughness={0.25} />
    </mesh>
  )
}

function Links() {
  const line = useRef<THREE.LineSegments>(null)
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(18), 3))
    return geo
  }, [])

  useFrame(() => {
    const pose = poseAt(Number(heroSheet.sequence.position))
    const pos = geometry.getAttribute('position') as THREE.BufferAttribute
    const pts = [pose.m1, pose.m2, pose.m2, pose.m3, pose.m3, pose.m1]
    pts.forEach((p, i) => pos.setXYZ(i, p.x, p.y, p.z))
    pos.needsUpdate = true
    if (line.current) {
      const mat = line.current.material as THREE.LineBasicMaterial
      mat.opacity = pose.links * 0.75
    }
  })

  return (
    <lineSegments ref={line} geometry={geometry}>
      <lineBasicMaterial color="#f59e0b" transparent opacity={0} />
    </lineSegments>
  )
}

function Dust({ day }: { day: boolean }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(240 * 3)
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 10
      arr[i + 1] = (Math.random() - 0.5) * 7
      arr[i + 2] = (Math.random() - 0.5) * 8
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.08
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={day ? '#b08950' : '#c9b48a'} size={0.02} transparent opacity={day ? 0.28 : 0.5} />
    </points>
  )
}

function Scene({ theme }: { theme: 'day' | 'night' }) {
  const day = theme === 'day'
  const bg = day ? '#ffffff' : '#07080c'

  return (
    <>
      <color attach="background" args={[bg]} />
      <fog attach="fog" args={[bg, day ? 12 : 10, day ? 28 : 26]} />
      <ambientLight intensity={day ? 0.72 : 0.35} />
      <directionalLight position={[4, 6, 4]} intensity={day ? 1.15 : 1.8} color={day ? '#fff7e8' : '#ffe4b5'} />
      <pointLight position={[-3, 2, 2]} intensity={day ? 7 : 12} color={M1} distance={12} />
      <pointLight position={[3, 2, 2]} intensity={day ? 7 : 12} color={M2} distance={12} />
      <pointLight position={[0, -2, 3]} intensity={day ? 7 : 12} color={M3} distance={12} />
      <IntroDirector />
      <CameraRig />
      <Orb which="m1" color={M1} />
      <Orb which="m2" color={M2} />
      <Orb which="m3" color={M3} />
      <Core />
      <Links />
      <Dust day={day} />
    </>
  )
}

export function HeroScene() {
  const { theme } = useTheme()

  return (
    <Canvas
      className="hero-canvas"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      camera={{ position: [0, 6, 11], fov: 36 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
    >
      <Scene theme={theme} />
    </Canvas>
  )
}
