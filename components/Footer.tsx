import styles from '@/styles/Footer.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Footer() {
  const router = useRouter()

  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.authorCopyrightYear}>
          <a
            title='github.com/emanuelefavero'
            target='_blank'
            href='https://github.com/emanuelefavero'
          >
            Emanuele Favero
          </a>
          <span className={styles.copyright} title='MIT'>
            ©
          </span>
          <span className={styles.year}>{new Date().getFullYear()}</span>
        </div>

        {router.pathname !== '/about' && (
          <div className={styles.about}>
            <Link href='/about'>About This Website</Link>
          </div>
        )}
      </footer>
    </div>
  )
}
