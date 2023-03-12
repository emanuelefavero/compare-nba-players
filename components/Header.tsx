import { FormEvent } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import styles from '@/styles/Header.module.scss'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { IPlayer } from '@/types'

interface Props {
  setLoadingPlayers: (loading: boolean) => void
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
  setLoadingPlayers,
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
    if (isValidPlayer(playerToSearch)) {
      setLoadingPlayers(true) // Show loading spinner
      const response = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${playerToSearch}`
      )
      const data = await response.json()
      setFoundPlayers(data.data)
      setPlayerToSearch('') // Clear search input

      setShowWelcomeSection(false) // Hide welcome section
      setShowFoundPlayers(true) // Show found players
      setShowSelectedPlayers(true) // Show selected players
      setShowCompareButton(true) // Show compare button

      setLoadingPlayers(false) // Hide loading spinner
    } else {
      toast.warn('Invalid player name!', {
        toastId: 'invalidPlayerName',
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handlePlayerSearch()
    }
  }

  const isValidPlayer = (player: string) => {
    //  check if the player name is valid - this regex allows all letters (lowercase and uppercase), all numbers, periods, hyphens, apostrophes, single quotes and spaces in no particolar order
    const regex = /^[a-zA-Z0-9.'\-_\s]*$/
    return regex.test(player)
  }

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <button className={styles.logo} onClick={() => Router.reload()}>
            <Image src='/logo.png' alt='logo' width={40} height={40} />
          </button>
        </div>

        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            handlePlayerSearch()
          }}
        >
          <input
            ref={searchInputRef}
            type='text'
            placeholder='Search player...'
            value={playerToSearch}
            onChange={(e) => setPlayerToSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          />

          <button type='submit'>Search</button>
        </form>
      </header>

      <ToastContainer />
    </div>
  )
}
