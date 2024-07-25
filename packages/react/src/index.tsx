'use client'

import { type HTMLAttributes, useEffect, useRef } from 'react'
import gradielicious, { type GradieliciousOptions } from 'gradielicious'

export type GradieliciousProps = HTMLAttributes<HTMLDivElement> &
  GradieliciousOptions

export default function Gradielicious({
  alpha,
  blue,
  green,
  red,
  animationSource,
  resolutionDivisor,
  speed,
  zoom,
  ...props
}: GradieliciousProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(
    () =>
      gradielicious(ref.current!, {
        alpha,
        blue,
        green,
        red,
        animationSource,
        resolutionDivisor,
        speed,
        zoom,
      }),
    [alpha, blue, green, red, animationSource, resolutionDivisor, speed, zoom],
  )

  return <div {...props} ref={ref} />
}
