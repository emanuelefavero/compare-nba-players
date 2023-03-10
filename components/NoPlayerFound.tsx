import styles from '@/styles/NoPlayerFound.module.scss'

interface Props {
  handleFocusOnSearchInput: () => void
}

export default function NoPlayerFound({ handleFocusOnSearchInput }: Props) {
  return (
    <div className={styles.noPlayerFound}>
      <div className={styles.FourZeroFour}>404</div>
      <h2>No player found</h2>
      <p>
        Please only search for {new Date().getFullYear()} active NBA players
      </p>
      <div
        onClick={handleFocusOnSearchInput}
        role='button'
        className={styles.searchAgainButton}
      >
        Search Again <span className={styles.icon}>⬆</span>
      </div>
    </div>
  )
}
