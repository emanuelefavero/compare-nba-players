import styles from '@/styles/WelcomeSection.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import Marquee from '@/components/Marquee'
import SearchMessage from '@/components/SearchMessage'

interface Props {
  showMessage: boolean
  handleShowMessage: () => void
  handleFocusOnSearchInput: () => void
  handleAddPlayerNameToSearchInput: (playerName: string) => void
}

export default function WelcomeSection({
  showMessage,
  handleShowMessage,
  handleFocusOnSearchInput,
  handleAddPlayerNameToSearchInput,
}: Props) {
  const [showWelcomeButton, setShowWelcomeButton] = useState(true)

  return (
    <section className={styles.welcome}>
      <Marquee
        handleAddPlayerNameToSearchInput={handleAddPlayerNameToSearchInput}
      />

      {/* Message */}
      {showMessage && <SearchMessage />}

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
          Compare {new Date().getFullYear()}
          <Image
            src={'/nba-logos/nba.png'}
            alt='nba logo'
            width={36}
            height={36}
          />
          Players 1v1
        </div>
      )}
    </section>
  )
}
