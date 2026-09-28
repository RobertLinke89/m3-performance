import { useEffect, useRef, useState } from 'react'
import { useContent } from '../useContent'
import { Img } from './Img'

const HOLD_MS = 1600
const MORPH_MS = 1800
const COLS = 280
const ROWS = 360

const QUAD_VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`

const QUAD_FRAG = `
precision highp float;
varying vec2 v_uv;
uniform sampler2D u_tex;
uniform float u_alpha;
void main() {
  vec4 c = texture2D(u_tex, v_uv);
  gl_FragColor = vec4(c.rgb, c.a * u_alpha);
}
`

const PART_VERT = `
attribute vec2 a_uv;
attribute vec2 a_seed;
uniform float u_t;
uniform vec2 u_res;
varying vec2 v_uv;
varying float v_wave;

void main() {
  float t = u_t;
  float wave = sin(t * 3.14159265);
  vec2 dir = a_seed * 2.0 - 1.0;
  float spin = (a_seed.x * 6.28318 + t * 6.2) * wave;
  vec2 swirl = vec2(cos(spin), sin(spin)) * (0.04 + a_seed.y * 0.05) * wave;
  vec2 burst = dir * (0.06 + a_seed.x * 0.08) * wave;
  burst.y += wave * 0.02;
  vec2 p = a_uv + burst + swirl;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
  gl_PointSize = max(0.85, mix(1.05, 2.1, wave) * (u_res.y / 900.0));
  v_uv = a_uv;
  v_wave = wave;
}
`

const PART_FRAG = `
precision highp float;
uniform sampler2D u_a;
uniform sampler2D u_b;
uniform float u_t;
varying vec2 v_uv;
varying float v_wave;

void main() {
  vec2 pc = gl_PointCoord - 0.5;
  float d = length(pc);
  if (d > 0.5) discard;
  float soft = smoothstep(0.5, 0.22, d);
  vec4 a = texture2D(u_a, v_uv);
  vec4 b = texture2D(u_b, v_uv);
  float alpha = max(a.a, b.a);
  if (alpha < 0.08) discard;
  float amt = smoothstep(0.1, 0.9, u_t);
  vec3 col = mix(a.rgb, b.rgb, amt);
  col += vec3(0.05, 0.03, 0.01) * v_wave;
  gl_FragColor = vec4(col, soft * alpha * mix(0.82, 0.95, v_wave));
}
`

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)
  if (!sh) return null
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    gl.deleteShader(sh)
    return null
  }
  return sh
}

function link(gl: WebGLRenderingContext, vert: string, frag: string) {
  const vs = compile(gl, gl.VERTEX_SHADER, vert)
  const fs = compile(gl, gl.FRAGMENT_SHADER, frag)
  if (!vs || !fs) return null
  const prog = gl.createProgram()
  if (!prog) return null
  gl.attachShader(prog, vs)
  gl.attachShader(prog, fs)
  gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null
  return prog
}

function coverDraw(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  dw: number,
  dh: number,
) {
  const iw = img.naturalWidth
  const ih = img.naturalHeight
  const scale = Math.min(dw / iw, dh / ih)
  const sw = iw * scale
  const sh = ih * scale
  const dx = (dw - sw) / 2
  const dy = dh - sh
  ctx.clearRect(0, 0, dw, dh)
  ctx.drawImage(img, dx, dy, sw, sh)
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.decoding = 'async'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

function buildParticles() {
  const data = new Float32Array(COLS * ROWS * 4)
  let k = 0
  for (let j = 0; j < ROWS; j++) {
    for (let i = 0; i < COLS; i++) {
      const jx = (Math.random() - 0.5) * 0.28
      const jy = (Math.random() - 0.5) * 0.28
      data[k++] = (i + 0.5 + jx) / COLS
      data[k++] = (j + 0.5 + jy) / ROWS
      data[k++] = Math.random()
      data[k++] = Math.random()
    }
  }
  return data
}

function useFineMotion() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(
      '(min-width: 861px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    )
    const apply = () => setFine(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return fine
}

function MichelFade() {
  const { michelSlides } = useContent()
  const [index, setIndex] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)
  const visible = useRef(true)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    const id = window.setInterval(() => {
      if (!visible.current) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      setIndex((n) => (n + 1) % michelSlides.length)
    }, 3200)
    return () => {
      io.disconnect()
      window.clearInterval(id)
    }
  }, [michelSlides.length])

  return (
    <div className="michel-show michel-fade" ref={wrapRef} aria-label="Michél Meier">
      {michelSlides.map((slide, i) => (
        <Img
          key={slide.src}
          src={slide.src}
          alt={i === index ? slide.label : ''}
          className={i === index ? 'on' : undefined}
        />
      ))}
    </div>
  )
}

export function MichelShow() {
  const fine = useFineMotion()
  if (!fine) return <MichelFade />
  return <MichelShowGL />
}

function MichelShowGL() {
  const { michelSlides } = useContent()
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let dead = false
    let raf = 0
    let gl: WebGLRenderingContext | null = null
    let texA: WebGLTexture | null = null
    let texB: WebGLTexture | null = null

    const start = async () => {
      const imgs = await Promise.all(michelSlides.map((s) => loadImage(s.src)))
      if (dead) return

      gl = canvas.getContext('webgl', {
        alpha: true,
        antialias: true,
        premultipliedAlpha: false,
      })
      const ctx2d = !gl ? canvas.getContext('2d', { alpha: true }) : null
      if (!gl && !ctx2d) return

      const scratch = document.createElement('canvas')
      const scratchCtx = scratch.getContext('2d', { willReadFrequently: true, alpha: true })
      if (!scratchCtx) return

      const count = COLS * ROWS
      const particles = buildParticles()

      let quad: WebGLProgram | null = null
      let part: WebGLProgram | null = null
      let quadBuf: WebGLBuffer | null = null
      let partBuf: WebGLBuffer | null = null
      let locQuadAlpha: WebGLUniformLocation | null = null
      let locPartT: WebGLUniformLocation | null = null
      let locPartRes: WebGLUniformLocation | null = null

      if (gl) {
        quad = link(gl, QUAD_VERT, QUAD_FRAG)
        part = link(gl, PART_VERT, PART_FRAG)
        if (!quad || !part) return

        quadBuf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

        partBuf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, partBuf)
        gl.bufferData(gl.ARRAY_BUFFER, particles, gl.STATIC_DRAW)

        locQuadAlpha = gl.getUniformLocation(quad, 'u_alpha')
        locPartT = gl.getUniformLocation(part, 'u_t')
        locPartRes = gl.getUniformLocation(part, 'u_res')
        gl.useProgram(quad)
        gl.uniform1i(gl.getUniformLocation(quad, 'u_tex'), 0)
        gl.useProgram(part)
        gl.uniform1i(gl.getUniformLocation(part, 'u_a'), 0)
        gl.uniform1i(gl.getUniformLocation(part, 'u_b'), 1)

        texA = gl.createTexture()
        texB = gl.createTexture()
        for (const tex of [texA, texB]) {
          gl.bindTexture(gl.TEXTURE_2D, tex)
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        }

        gl.enable(gl.BLEND)
        gl.clearColor(0, 0, 0, 0)
      }

      const upload = (tex: WebGLTexture | null, img: HTMLImageElement) => {
        if (!gl || !tex) return
        scratch.width = canvas.width
        scratch.height = canvas.height
        scratchCtx.clearRect(0, 0, scratch.width, scratch.height)
        coverDraw(scratchCtx, img, scratch.width, scratch.height)
        gl.bindTexture(gl.TEXTURE_2D, tex)
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, scratch)
      }

      const bindTextures = () => {
        if (!gl) return
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, texA)
        gl.activeTexture(gl.TEXTURE1)
        gl.bindTexture(gl.TEXTURE_2D, texB)
      }

      const drawQuad = (texUnit: number, alpha: number) => {
        if (!gl || !quad || !quadBuf) return
        gl.useProgram(quad)
        gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf)
        const loc = gl.getAttribLocation(quad, 'a_pos')
        gl.enableVertexAttribArray(loc)
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
        gl.uniform1f(locQuadAlpha, alpha)
        gl.uniform1i(gl.getUniformLocation(quad, 'u_tex'), texUnit)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      }

      const drawParticles = (t: number) => {
        if (!gl || !part || !partBuf) return
        gl.useProgram(part)
        gl.bindBuffer(gl.ARRAY_BUFFER, partBuf)
        const uv = gl.getAttribLocation(part, 'a_uv')
        const seed = gl.getAttribLocation(part, 'a_seed')
        gl.enableVertexAttribArray(uv)
        gl.enableVertexAttribArray(seed)
        gl.vertexAttribPointer(uv, 2, gl.FLOAT, false, 16, 0)
        gl.vertexAttribPointer(seed, 2, gl.FLOAT, false, 16, 8)
        gl.uniform1f(locPartT, t)
        gl.uniform2f(locPartRes, canvas.width, canvas.height)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
        gl.drawArrays(gl.POINTS, 0, count)
      }

      const paint2d = (t: number, from: number, to: number) => {
        if (!ctx2d) return
        ctx2d.clearRect(0, 0, canvas.width, canvas.height)
        if (t <= 0.02) {
          coverDraw(ctx2d, imgs[from], canvas.width, canvas.height)
          return
        }
        if (t >= 0.98) {
          coverDraw(ctx2d, imgs[to], canvas.width, canvas.height)
          return
        }
        const wave = Math.sin(t * Math.PI)
        const step = 3
        scratch.width = canvas.width
        scratch.height = canvas.height
        const aCtx = scratch.getContext('2d')
        if (!aCtx) return
        coverDraw(aCtx, imgs[from], scratch.width, scratch.height)
        const srcA = aCtx.getImageData(0, 0, scratch.width, scratch.height).data
        coverDraw(aCtx, imgs[to], scratch.width, scratch.height)
        const srcB = aCtx.getImageData(0, 0, scratch.width, scratch.height).data
        for (let y = 0; y < canvas.height; y += step) {
          for (let x = 0; x < canvas.width; x += step) {
            const i = (y * canvas.width + x) * 4
            const la = srcA[i] * 0.3 + srcA[i + 1] * 0.59 + srcA[i + 2] * 0.11
            const lb = srcB[i] * 0.3 + srcB[i + 1] * 0.59 + srcB[i + 2] * 0.11
            if (Math.max(la, lb) < 12) continue
            const seedX = ((x * 12.9898 + y * 78.233) % 100) / 100
            const seedY = ((x * 39.346 + y * 11.135) % 100) / 100
            const dirX = seedX * 2 - 1
            const dirY = seedY * 2 - 1
            const spin = (seedX * Math.PI * 2 + t * 6) * wave
            const px = x + (dirX * 70 + Math.cos(spin) * 40) * wave
            const py = y + (dirY * 70 + Math.sin(spin) * 40) * wave
            const amt = t < 0.5 ? 0 : 1
            const src = amt < 0.5 ? srcA : srcB
            ctx2d.fillStyle = `rgb(${src[i]},${src[i + 1]},${src[i + 2]})`
            ctx2d.beginPath()
            ctx2d.arc(px, py, 1.05 + wave * 0.7, 0, Math.PI * 2)
            ctx2d.fill()
          }
        }
      }

      const resize = () => {
        const dpr = Math.min(2, window.devicePixelRatio || 1)
        const w = Math.max(1, wrap.clientWidth)
        const h = Math.max(1, wrap.clientHeight)
        const pw = Math.round(w * dpr)
        const ph = Math.round(h * dpr)
        if (canvas.width === pw && canvas.height === ph) return false
        canvas.width = pw
        canvas.height = ph
        gl?.viewport(0, 0, pw, ph)
        return true
      }

      resize()

      let from = 0
      let to = 1
      let phase: 'hold' | 'morph' = 'hold'
      let phaseStart = performance.now()
      if (gl) {
        upload(texA, imgs[from])
        upload(texB, imgs[to])
      }

      const paint = (t: number) => {
        if (gl && quad && part) {
          gl.clear(gl.COLOR_BUFFER_BIT)
          bindTextures()
          const fadeA = 1 - smooth(clamp((t - 0.0) / 0.18))
          const fadeB = smooth(clamp((t - 0.82) / 0.18))
          if (t <= 0 || fadeA > 0.02) drawQuad(0, t <= 0 ? 1 : fadeA)
          if (t > 0.02 && t < 0.98) drawParticles(t)
          if (fadeB > 0.02) drawQuad(1, fadeB)
          return
        }
        paint2d(t, from, to)
      }

      const loop = (now: number) => {
        if (dead) return
        if (resize() && gl) {
          upload(texA, imgs[from])
          upload(texB, imgs[to])
        }
        const elapsed = now - phaseStart

        if (reduced) {
          paint(0)
          return
        }

        if (phase === 'hold') {
          paint(0)
          if (elapsed >= HOLD_MS) {
            phase = 'morph'
            phaseStart = now
            to = (from + 1) % imgs.length
            if (gl) upload(texB, imgs[to])
          }
        } else {
          const raw = Math.min(1, elapsed / MORPH_MS)
          const t = raw * raw * (3 - 2 * raw)
          paint(t)
          if (raw >= 1) {
            from = to
            phase = 'hold'
            phaseStart = now
            if (gl) {
              const swap = texA
              texA = texB
              texB = swap
            }
          }
        }

        raf = window.requestAnimationFrame(loop)
      }

      raf = window.requestAnimationFrame(loop)
    }

    void start()

    return () => {
      dead = true
      window.cancelAnimationFrame(raf)
      gl?.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [michelSlides])

  return (
    <div
      className="michel-show"
      ref={wrapRef}
      aria-live="polite"
      aria-label="Michél Meier"
    >
      <canvas ref={canvasRef} />
    </div>
  )
}

function clamp(n: number) {
  return Math.min(1, Math.max(0, n))
}

function smooth(n: number) {
  return n * n * (3 - 2 * n)
}
