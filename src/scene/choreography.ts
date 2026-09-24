type Track = [number, number][]

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function easeOut(t: number) {
  return 1 - (1 - t) ** 3
}

function sample(track: Track, time: number) {
  if (time <= track[0][0]) return track[0][1]
  for (let i = 1; i < track.length; i++) {
    const [t1, v1] = track[i]
    const [t0, v0] = track[i - 1]
    if (time <= t1) {
      return lerp(v0, v1, easeOut((time - t0) / (t1 - t0)))
    }
  }
  return track[track.length - 1][1]
}

const camX: Track = [[0, 0], [2.2, 0]]
const camY: Track = [[0, 6], [2.2, 0.45]]
const camZ: Track = [[0, 11], [1.8, 3.7]]
const camFov: Track = [[0, 36], [2.2, 42]]

const m1 = {
  x: [[0, -5.2], [1.6, -1.05]] as Track,
  y: [[0, 4.8], [1.6, 0.02]] as Track,
  z: [[0, -4], [1.6, 0]] as Track,
  scale: [[0, 0.18], [1.5, 1.18]] as Track,
  glow: [[1, 0], [2.1, 1]] as Track,
}

const m2 = {
  x: [[0, 5.2], [1.65, 1.05]] as Track,
  y: [[0, -4.2], [1.65, 0.02]] as Track,
  z: [[0, -3], [1.65, 0]] as Track,
  scale: [[0, 0.18], [1.55, 1.18]] as Track,
  glow: [[1.05, 0], [2.1, 1]] as Track,
}

const m3 = {
  x: [[0, 0], [1.7, 0]] as Track,
  y: [[0, 6.2], [1.7, 1.55]] as Track,
  z: [[0, 4], [1.7, 0.1]] as Track,
  scale: [[0, 0.18], [1.6, 1.18]] as Track,
  glow: [[1.1, 0], [2.1, 1]] as Track,
}

export function poseAt(time: number) {
  return {
    camera: { x: sample(camX, time), y: sample(camY, time), z: sample(camZ, time), fov: sample(camFov, time) },
    m1: {
      x: sample(m1.x, time),
      y: sample(m1.y, time),
      z: sample(m1.z, time),
      scale: sample(m1.scale, time),
      glow: sample(m1.glow, time),
    },
    m2: {
      x: sample(m2.x, time),
      y: sample(m2.y, time),
      z: sample(m2.z, time),
      scale: sample(m2.scale, time),
      glow: sample(m2.glow, time),
    },
    m3: {
      x: sample(m3.x, time),
      y: sample(m3.y, time),
      z: sample(m3.z, time),
      scale: sample(m3.scale, time),
      glow: sample(m3.glow, time),
    },
    core: {
      x: 0,
      y: 0.58,
      z: 0,
      scale: sample([[1.2, 0], [2.1, 1.15]], time),
      glow: sample([[1.3, 0], [2.2, 1.8]], time),
    },
    links: sample([[1.4, 0], [2.2, 1]], time),
  }
}
