import styles from '@/styles/NoPlayerFound.module.scss'

export default function NoPlayerFound() {
  return (
    <div className={styles.noPlayerFound}>
      <p>
        No player found, please search again{' '}
        <span className={styles.arrowHand}>☝️</span>
      </p>
    </div>
  )
}
