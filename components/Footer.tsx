import styles from '@/styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
    </footer>
  )
}
