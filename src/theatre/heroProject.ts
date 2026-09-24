import { getProject, types, type ISheet } from '@theatre/core'
import heroState from './heroState.json'

const project = getProject('M3 Performance', { state: heroState as never })

export const heroSheet: ISheet = project.sheet('Hero')

export const cameraObj = heroSheet.object('Camera', {
  x: types.number(0, { range: [-20, 20] }),
  y: types.number(8, { range: [-10, 20] }),
  z: types.number(22, { range: [2, 40] }),
  fov: types.number(38, { range: [20, 80] }),
})

export const m1Obj = heroSheet.object('M1', {
  x: types.number(-8, { range: [-12, 12] }),
  y: types.number(6, { range: [-8, 10] }),
  z: types.number(-6, { range: [-12, 8] }),
  scale: types.number(0.15, { range: [0.05, 2] }),
  glow: types.number(0, { range: [0, 2] }),
})

export const m2Obj = heroSheet.object('M2', {
  x: types.number(8, { range: [-12, 12] }),
  y: types.number(-5, { range: [-8, 10] }),
  z: types.number(-4, { range: [-12, 8] }),
  scale: types.number(0.15, { range: [0.05, 2] }),
  glow: types.number(0, { range: [0, 2] }),
})

export const m3Obj = heroSheet.object('M3', {
  x: types.number(0, { range: [-12, 12] }),
  y: types.number(-7, { range: [-8, 10] }),
  z: types.number(6, { range: [-12, 8] }),
  scale: types.number(0.15, { range: [0.05, 2] }),
  glow: types.number(0, { range: [0, 2] }),
})

export const coreObj = heroSheet.object('Core', {
  scale: types.number(0, { range: [0, 2] }),
  glow: types.number(0, { range: [0, 3] }),
})

export const linksObj = heroSheet.object('Links', {
  opacity: types.number(0, { range: [0, 1] }),
})
