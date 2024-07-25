'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

export default function GalacticText() {
  const ref = useRef<HTMLDivElement>(null)

  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    function onScroll() {
      if (ref.current) {
        setTranslateY(
          ((window.scrollY % window.innerHeight) / window.innerHeight) * 100,
        )
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={styles.info}
      ref={ref}
      style={{
        color: 'yellow',
        transform: `rotateX(45deg) translateY(calc(90% - ${translateY}%))`,
        textAlign: 'center',
        fontFamily: 'Helvetica',
        fontSize: 'calc(1vw + 1rem)',
        fontWeight: 900,
      }}
    >
      <p>
        npm install gradielicious
        <br />
        <br />
        npm install gradielicious-react
      </p>
    </div>
  )
}
