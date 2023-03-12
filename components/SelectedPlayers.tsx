import styles from '@/styles/SelectedPlayers.module.scss'
import { useEffect } from 'react'

import { toast } from 'react-toastify'

import { IPlayer } from '@/types'

interface Props {
  player1: IPlayer | null
  player2: IPlayer | null
}

export default function SelectedPlayers({ player1, player2 }: Props) {
  useEffect(() => {
    if (player1 && !player2) {
      toast.info('Add a second player to compare against!', {
        toastId: 'selectSecondPlayer',
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
  }, [player1, player2])

  return (
    <>
      <section className={styles.selectedPlayers}>
        {player1 && (
          <div>
            <p>
              {player1.first_name} {player1.last_name}
            </p>
          </div>
        )}

        {player1 && player2 && <div className={styles.vs}>VS</div>}

        {player2 && (
          <div>
            <p className={styles.secondPlayer}>
              {player2.first_name} {player2.last_name}
            </p>
          </div>
        )}
      </section>
    </>
  )
}
