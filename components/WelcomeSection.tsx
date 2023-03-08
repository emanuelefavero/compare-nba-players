import styles from '@/styles/WelcomeSection.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import Marquee from '@/components/Marquee'

interface Props {
  handleFocusOnSearchInput: () => void
  handleAddPlayerNameToSearchInput: (playerName: string) => void
}

export default function WelcomeSection({
  handleFocusOnSearchInput,
  handleAddPlayerNameToSearchInput,
}: Props) {
  const [showMessage, setShowMessage] = useState(false)
  const [showWelcomeButton, setShowWelcomeButton] = useState(true)

  const handleShowMessage = () => {
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  return (
    <section className={styles.welcome}>
      <Marquee
        handleAddPlayerNameToSearchInput={handleAddPlayerNameToSearchInput}
      />

      {/* Message */}
      {showMessage && (
        <div className={styles.message}>
          <span className={styles.arrow}>⬆</span> Search for a player
        </div>
      )}

      {/* Welcome Gradient Button */}
      {showWelcomeButton && (
        <div
          onClick={() => {
            handleFocusOnSearchInput()
            handleShowMessage()
            setShowWelcomeButton(false)
          }}
          role='button'
          className={styles.buttonRotatingGradient}
        >
          Compare
          <Image
            src={'/nba-logos/nba.png'}
            alt='nba logo'
            width={36}
            height={36}
          />
          Players
        </div>
      )}
    </section>
  )
}
