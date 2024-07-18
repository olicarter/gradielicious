'use client'

import { type HTMLAttributes, useEffect, useRef } from 'react'
import gradielicious, { type GradieliciousOptions } from 'gradielicious'

export type GradieliciousProps = HTMLAttributes<HTMLDivElement> &
  GradieliciousOptions

export default function Gradielicious({
  animateAlpha,
  animateBlue,
  animateGreen,
  animateRed,
  resolutionDivisor,
  speed,
  zoom,
  ...props
}: GradieliciousProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(
    () =>
      gradielicious(ref.current!, {
        animateAlpha,
        animateBlue,
        animateGreen,
        animateRed,
        resolutionDivisor,
        speed,
        zoom,
      }),
    [
      animateAlpha,
      animateBlue,
      animateGreen,
      animateRed,
      resolutionDivisor,
      speed,
      zoom,
    ],
  )

  return <div {...props} ref={ref} />
}
