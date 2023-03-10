import styles from '@/styles/NoPlayerFound.module.scss'

export default function NoPlayerFound() {
  return (
    <div className={styles.noPlayerFound}>
      <div className={styles.FourZeroFour}>404</div>
      <h2>No player found</h2>
      <p>
        Please search again <span className={styles.icon}>⬆</span>
      </p>
    </div>
  )
}
