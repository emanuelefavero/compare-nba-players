import styles from '@/styles/WelcomeSection.module.scss'
import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <section className={styles.welcome}>
      <div role='button' className={styles.buttonRotatingGradient}>
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
