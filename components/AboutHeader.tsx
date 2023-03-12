import styles from '@/styles/Header.module.scss'
import { useRouter } from 'next/router'

export default function AboutHeader() {
  const router = useRouter()

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <button onClick={() => router.back()}>← Back</button>
      </header>
    </div>
  )
}
