import styles from '@/styles/SearchMessage.module.scss'

export default function SearchMessage() {
  return (
    <>
      <div className={styles.message}>
        <span className={styles.arrow}>⬆</span> Search for a player
      </div>
    </>
  )
}
