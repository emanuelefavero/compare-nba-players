import { FormEvent, useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import styles from '@/styles/Header.module.scss'

import { IPlayer } from '@/types'

interface Props {
  searchInputRef: React.RefObject<HTMLInputElement>
  playerToSearch: string
  setPlayerToSearch: (player: string) => void
  setFoundPlayers: (players: IPlayer[]) => void
  setShowFoundPlayers: (show: boolean) => void
  setShowSelectedPlayers: (show: boolean) => void
  setShowCompareButton: (show: boolean) => void
  setShowWelcomeSection: (show: boolean) => void
}

export default function Header({
  searchInputRef,
  playerToSearch,
  setPlayerToSearch,
  setFoundPlayers,
  setShowFoundPlayers,
  setShowSelectedPlayers,
  setShowCompareButton,
  setShowWelcomeSection,
}: Props) {
  // const [playerToSearch, setPlayerToSearch] = useState('')

  const handlePlayerSearch = async () => {
    const response = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${playerToSearch}`
    )
    const data = await response.json()
    setFoundPlayers(data.data)

    setShowFoundPlayers(true) // Show found players
    setShowSelectedPlayers(true) // Hide selected players
    setShowCompareButton(true) // Hide compare button
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handlePlayerSearch()
    }
  }

  return (
    <header className={styles.header}>
      <button className={styles.logo} onClick={() => Router.reload()}>
        <Image src='/logo.png' alt='logo' width={40} height={40} />
      </button>

      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          handlePlayerSearch()
          setShowWelcomeSection(false) // Hide welcome section
        }}
      >
        <input
          ref={searchInputRef}
          type='text'
          placeholder='Search player...'
          value={playerToSearch}
          onChange={(e) => setPlayerToSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button type='submit'>Search</button>
      </form>
    </header>
  )
}
