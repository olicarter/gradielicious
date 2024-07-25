import Gradielicious from 'gradielicious-react'
import { SiGithub, SiNpm } from '@icons-pack/react-simple-icons'
import styles from './page.module.css'
import GalacticText from './galactic-text'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Gradielicious
          className={styles.gradielicious}
          style={{ position: 'absolute' }}
        />
        <div className={styles.info} style={{ mixBlendMode: 'overlay' }}>
          <h1>gradielicious</h1>
          <p>Infinitely random, ultra-performant animated gradients</p>
          <ul>
            <a
              className={styles.linkCircle}
              href="https://github.com/olicarter/gradielicious"
              rel="noreferrer"
              target="_blank"
            >
              <SiGithub size={28} />
            </a>
            <a
              className={styles.linkNpm}
              href="https://npmjs.com/package/gradielicious"
              rel="noreferrer"
              target="_blank"
            >
              <SiNpm size={28} />
            </a>
          </ul>
        </div>
      </section>
      <section className={styles.section} style={{ color: 'white' }}>
        <Gradielicious
          className={styles.gradielicious}
          style={{
            filter: 'brightness(0.5) contrast(1.5)',
            position: 'absolute',
          }}
        />
        <div className={styles.info}>
          <code>{`filter: brightness(0.5) contrast(1.5)`}</code>
        </div>
      </section>
      <section className={styles.section} style={{ color: 'black' }}>
        <Gradielicious
          className={styles.gradielicious}
          style={{
            filter: 'brightness(1.5) contrast(1.5)',
            position: 'absolute',
          }}
        />
        <div className={styles.info}>
          <code>{`filter: brightness(1.5) contrast(1.5)`}</code>
        </div>
      </section>
      <section
        className={styles.section}
        style={{ mixBlendMode: 'difference' }}
      >
        <Gradielicious
          red={0}
          className={styles.gradielicious}
          speed={0}
          style={{ position: 'absolute' }}
        />
        <div className={styles.info}>
          <code>{`{ red: 0, speed: 0 }`}</code>
        </div>
      </section>
      <section
        className={styles.section}
        style={{ mixBlendMode: 'difference' }}
      >
        <Gradielicious
          green={0}
          className={styles.gradielicious}
          speed={1}
          style={{ position: 'absolute' }}
        />
        <div className={styles.info}>
          <code>{`{ green: 0, speed: 1 }`}</code>
        </div>
      </section>
      <section
        className={styles.section}
        style={{ mixBlendMode: 'difference' }}
      >
        <Gradielicious
          blue={0}
          className={styles.gradielicious}
          speed={2}
          style={{ position: 'absolute' }}
        />
        <div className={styles.info}>
          <code>{`{ blue: 0, speed: 2 }`}</code>
        </div>
      </section>
      <section className={styles.section}>
        <Gradielicious
          red={255}
          className={styles.gradielicious}
          style={{ position: 'absolute' }}
          zoom={1}
        />
        <div className={styles.info} style={{ color: 'black' }}>
          <code>{`{ red: 255, zoom: 1 }`}</code>
        </div>
      </section>
      <section className={styles.section}>
        <Gradielicious
          green={255}
          className={styles.gradielicious}
          style={{ position: 'absolute' }}
          zoom={2}
        />
        <div className={styles.info} style={{ color: 'black' }}>
          <code>{`{ green: 255, zoom: 2 }`}</code>
        </div>
      </section>
      <section className={styles.section}>
        <Gradielicious
          blue={255}
          className={styles.gradielicious}
          style={{ position: 'absolute' }}
          zoom={3}
        />
        <div className={styles.info} style={{ color: 'black' }}>
          <code>{`{ blue: 255, zoom: 3 }`}</code>
        </div>
      </section>
      <section className={styles.section}>
        <Gradielicious
          animationSource="scroll"
          className={styles.gradielicious}
          speed={2}
          style={{ position: 'absolute' }}
        />
        <div
          className={styles.info}
          style={{
            mixBlendMode: 'overlay',
            position: 'sticky',
            top: '0.5rem',
          }}
        >
          <code>{`animationSource: 'scroll'`}</code>
        </div>
      </section>
      <section
        className={styles.section}
        style={{
          backgroundColor: 'black',
          perspective: '400px',
          overflow: 'hidden',
        }}
      >
        {Array.from({ length: 500 }).map((_, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'white',
              height: '3px',
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              transform: `rotate(45deg) scale(${Math.random()})`,
              width: '3px',
            }}
          />
        ))}
        <Gradielicious
          alpha="animate"
          className={styles.gradielicious}
          style={{
            filter: 'brightness(0.6) contrast(1.5)',
            position: 'absolute',
          }}
          zoom={3}
        />
        <GalacticText>
          <p>
            npm install gradielicious
            <br />
            <br />
            or
            <br />
            <br />
            npm install gradielicious-react
          </p>
        </GalacticText>
      </section>
    </main>
  )
}
