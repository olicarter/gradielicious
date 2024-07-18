import { createNoise3D } from 'simplex-noise'

export interface GradieliciousOptions {
  animateAlpha?: boolean
  animateBlue?: boolean
  animateGreen?: boolean
  animateRed?: boolean
  resolutionDivisor?: number
  speed?: number
  zoom?: number
}

export default function gradielicious(
  parent: Element,
  options?: GradieliciousOptions,
) {
  const animateRed = options?.animateRed ?? true
  const animateGreen = options?.animateGreen ?? true
  const animateBlue = options?.animateBlue ?? true
  const animateAlpha = options?.animateAlpha ?? false
  const resolutionDivisor = options?.resolutionDivisor ?? 10
  const speed = options?.speed ?? 1
  const zoom = options?.zoom ?? 5

  const canvas = document.createElement('canvas')
  const noise3D = createNoise3D()
  const zoomAdjusted = zoom * 1000
  const divisor = zoomAdjusted / resolutionDivisor

  let timeR = 0
  let timeG = 1
  let timeB = 2
  let timeA = 3

  const draw = () => {
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const imageData = ctx.createImageData(canvas.width, canvas.height)
    const data = imageData.data

    function noiseFunc(x: number, y: number, time: number) {
      return (noise3D(x / divisor, y / divisor, time) + 1) / 2
    }

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const valueR = animateRed ? noiseFunc(x, y, timeR) : 1
        const valueG = animateGreen ? noiseFunc(x, y, timeG) : 1
        const valueB = animateBlue ? noiseFunc(x, y, timeB) : 1
        const valueA = animateAlpha ? noiseFunc(x, y, timeA) : 1

        const cell = (y * canvas.width + x) * 4
        data[cell] = valueR * 255
        data[cell + 1] = valueG * 255
        data[cell + 2] = valueB * 255
        data[cell + 3] = valueA * 255
      }
    }

    ctx.putImageData(imageData, 0, 0)

    const speedAdjusted = (speed / zoomAdjusted) * 10
    if (animateRed) timeR += speedAdjusted
    if (animateGreen) timeG += speedAdjusted + speedAdjusted * 0.001
    if (animateBlue) timeB += speedAdjusted + speedAdjusted * 0.002
    if (animateAlpha) timeA += speedAdjusted + speedAdjusted * 0.002

    requestAnimationFrame(draw)
  }

  const resize = () => {
    canvas.width = canvas.clientWidth / resolutionDivisor
    canvas.height = canvas.clientHeight / resolutionDivisor
  }

  window.addEventListener('resize', resize)

  canvas.style.display = 'block'
  canvas.style.height = '100%'
  canvas.style.width = '100%'

  parent.appendChild(canvas)

  resize()
  draw()

  return () => {
    parent.removeChild(canvas)
    window.removeEventListener('resize', resize)
  }
}
