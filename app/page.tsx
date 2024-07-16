import Gradielicious from 'gradielicious-react'
import { SiGithub, SiNpm } from '@icons-pack/react-simple-icons'
import { Globe } from 'lucide-react'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Gradielicious className={styles.gradielicious} />
      <h1>gradielicious</h1>
      <p>Infinitely random, ultra-performant animated gradients</p>
      <ul>
        <a
          className={styles.linkCircle}
          href="https://gradielicious.vercel.app"
          rel="noreferrer"
          target="_blank"
        >
          <Globe size={28} />
        </a>
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
    </main>
  )
}
