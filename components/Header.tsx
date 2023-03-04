import { FormEvent, useState } from 'react'

import { IPlayer } from '@/types'

interface Props {
  setFoundPlayers: (players: IPlayer[]) => void
}

export default function Header({ setFoundPlayers }: Props) {
  const [playerToSearch, setPlayerToSearch] = useState('')

  const handlePlayerSearch = async () => {
    const response = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${playerToSearch}`
    )
    const data = await response.json()
    setFoundPlayers(data.data)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handlePlayerSearch()
    }
  }

  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          handlePlayerSearch()
        }}
      >
        <input
          type='text'
          placeholder='Search player...'
          value={playerToSearch}
          onChange={(e) => setPlayerToSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button type='submit'>Search</button>
      </form>
    </>
  )
}
