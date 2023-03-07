import styles from '@/styles/WelcomeSection.module.scss'
import Image from 'next/image'

interface Props {
  handleFocusOnSearchInput: () => void
}

export default function WelcomeSection({ handleFocusOnSearchInput }: Props) {
  return (
    <section className={styles.welcome}>
      <div
        onClick={handleFocusOnSearchInput}
        role='button'
        className={styles.buttonRotatingGradient}
      >
        Compare
        <Image
          src={'/nba-logos/nba.svg'}
          alt='nba logo'
          width={36}
          height={36}
        />
        Players
      </div>
    </section>
  )
}
