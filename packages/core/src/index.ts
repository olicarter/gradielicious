import { createNoise3D } from 'simplex-noise'

export interface GradieliciousOptions {
  alpha?: number | 'animate'
  blue?: number | 'animate'
  green?: number | 'animate'
  red?: number | 'animate'
  animationSource?: 'scroll' | 'time'
  resolutionDivisor?: number
  speed?: number
  zoom?: number
}

export default function gradielicious(
  parent: Element,
  options?: GradieliciousOptions,
) {
  const red = options?.red ?? 'animate'
  const green = options?.green ?? 'animate'
  const blue = options?.blue ?? 'animate'
  const alpha = options?.alpha ?? 255
  const animationSource = options?.animationSource ?? 'time'
  const resolutionDivisor = options?.resolutionDivisor ?? 20
  const speed = options?.speed ?? 1
  const zoom = options?.zoom ?? 5

  const canvas = document.createElement('canvas')
  const noise3D = createNoise3D()
  const zoomAdjusted = zoom * 1000
  const divisor = zoomAdjusted / resolutionDivisor

  let playing = false
  let timeR = 1 * (red === 'animate' ? 255 : red)
  let timeG = 1.1 * (green === 'animate' ? 255 : green)
  let timeB = 1.2 * (blue === 'animate' ? 255 : blue)
  let timeA = 1.3 * (alpha === 'animate' ? 255 : alpha)

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
        const valueR = red === 'animate' ? noiseFunc(x, y, timeR) : red
        const valueG = green === 'animate' ? noiseFunc(x, y, timeG) : green
        const valueB = blue === 'animate' ? noiseFunc(x, y, timeB) : blue
        const valueA = alpha === 'animate' ? noiseFunc(x, y, timeA) : alpha

        const cell = (y * canvas.width + x) * 4
        data[cell] = valueR * (red === 'animate' ? 255 : red)
        data[cell + 1] = valueG * (green === 'animate' ? 255 : green)
        data[cell + 2] = valueB * (blue === 'animate' ? 255 : blue)
        data[cell + 3] = valueA * (alpha === 'animate' ? 255 : alpha)
      }
    }

    ctx.putImageData(imageData, 0, 0)

    if (animationSource === 'time') {
      const speedAdjusted = (speed / zoomAdjusted) * 10
      if (red === 'animate') timeR += speedAdjusted
      if (green === 'animate') timeG += speedAdjusted + speedAdjusted * 0.001
      if (blue === 'animate') timeB += speedAdjusted + speedAdjusted * 0.002
      if (alpha === 'animate') timeA += speedAdjusted + speedAdjusted * 0.002
      if (playing) requestAnimationFrame(draw)
    }
  }

  function resize() {
    canvas.width = canvas.clientWidth / resolutionDivisor
    canvas.height = canvas.clientHeight / resolutionDivisor
  }

  function handleScroll() {
    const distanceScrolled = window.scrollY
    const speedAdjusted = 255 + (speed / zoomAdjusted) * distanceScrolled
    if (red === 'animate') timeR = speedAdjusted
    if (green === 'animate') timeG = speedAdjusted * 1.1
    if (blue === 'animate') timeB = speedAdjusted * 1.2
    if (alpha === 'animate') timeA = speedAdjusted * 1.3
    requestAnimationFrame(draw)
  }

  function intersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      playing = entry.isIntersecting
      if (entry.isIntersecting) {
        draw()
        if (animationSource === 'scroll') {
          window.addEventListener('scroll', handleScroll)
        }
      } else {
        window.removeEventListener('scroll', handleScroll)
      }
    })
  }

  const observer = new IntersectionObserver(intersectionObserverCallback, {
    root: document,
    rootMargin: '0px',
    threshold: 0,
  })

  canvas.style.display = 'block'
  canvas.style.height = '100%'
  canvas.style.width = '100%'

  parent.appendChild(canvas)

  resize()

  observer.observe(canvas)

  window.addEventListener('resize', resize)

  return () => {
    parent.removeChild(canvas)
    observer.disconnect()
    window.removeEventListener('resize', resize)
    window.removeEventListener('scroll', handleScroll)
  }
}
