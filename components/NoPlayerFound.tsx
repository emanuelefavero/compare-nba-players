import styles from '@/styles/NoPlayerFound.module.scss'
import SearchMessage from '@/components/SearchMessage'

interface Props {
  showMessage: boolean
  handleShowMessage: () => void
  handleFocusOnSearchInput: () => void
}

export default function NoPlayerFound({
  showMessage,
  handleShowMessage,
  handleFocusOnSearchInput,
}: Props) {
  return (
    <div className={styles.noPlayerFound}>
      {/* Message */}
      {showMessage && <SearchMessage />}

      <div className={styles.FourZeroFour}>404</div>
      <h2>No player found</h2>
      <p>
        Please only search for {new Date().getFullYear()} active NBA players
      </p>
      <div
        onClick={() => {
          handleFocusOnSearchInput()
          handleShowMessage()
        }}
        role='button'
        className={styles.searchAgainButton}
      >
        Search Again <span className={styles.icon}>⬆</span>
      </div>
    </div>
  )
}
