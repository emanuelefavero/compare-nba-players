import styles from '../styles/ComparedPlayersInfo.module.scss'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { IPlayer } from '../types'

interface Props {
  player1: IPlayer | null
  player2: IPlayer | null
}

export default function ComparedPlayersInfo({ player1, player2 }: Props) {
  const [player1Position, setPlayer1Position] = useState('')
  const [player2Position, setPlayer2Position] = useState('')

  useEffect(() => {
    if (player1) {
      switch (player1.position) {
        case 'C':
          setPlayer1Position('Center')
          break
        case 'C-F':
          setPlayer1Position('Center-Forward')
          break
        case 'F-C':
          setPlayer1Position('Forward-Center')
          break
        case 'F':
          setPlayer1Position('Forward')
          break
        case 'F-G':
          setPlayer1Position('Forward-Guard')
          break
        case 'G-F':
          setPlayer1Position('Guard-Forward')
          break
        case 'G':
          setPlayer1Position('Guard')
          break
        default:
          player1.position ? setPlayer1Position(player1.position) : ''
      }
    }

    if (player2) {
      switch (player2.position) {
        case 'C':
          setPlayer2Position('Center')
          break
        case 'C-F':
          setPlayer2Position('Center-Forward')
          break
        case 'F-C':
          setPlayer2Position('Forward-Center')
          break
        case 'F':
          setPlayer2Position('Forward')
          break
        case 'F-G':
          setPlayer2Position('Forward-Guard')
          break
        case 'G-F':
          setPlayer2Position('Guard-Forward')
          break
        case 'G':
          setPlayer2Position('Guard')
          break
        default:
          player2.position ? setPlayer2Position(player2.position) : ''
      }
    }
  }, [player1, player2])

  return (
    <section className={styles.comparedPlayersInfo}>
      {/* PLAYER 1 */}
      <div className={`${styles.player} ${styles.player1}`}>
        {/* Image And Name */}
        <div className={styles.imageAndName}>
          {/* Image */}
          {player1?.team.abbreviation && (
            <Image
              src={`/nba-logos/${player1.team.abbreviation}.svg`}
              alt='logo'
              width={60}
              height={60}
            />
          )}
          {/* Name */}
          <h2 className={styles.name}>
            <div className={styles.firstName}>{player1?.first_name}</div>
            <div>{player1?.last_name}</div>
          </h2>
        </div>

        {/* Team And Position */}
        <div className={styles.teamAndPosition}>
          {/* Team */}
          <p>{player1?.team.name}</p>
          {/* Position */}
          {player1?.position && (
            <>
              <p className={styles.dot}>•</p>
              <p>{player1Position}</p>
            </>
          )}
        </div>
      </div>

      {/* VS */}
      <div className={styles.vs}>
        <span className={styles.text}>VS</span>
      </div>

      {/* PLAYER 2 */}
      <div className={`${styles.player} ${styles.player2}`}>
        {/* Image And Name */}
        <div className={styles.imageAndName}>
          {/* Name */}
          <h2 className={styles.name}>
            <div className={styles.firstName}>{player2?.first_name}</div>
            <div>{player2?.last_name}</div>
          </h2>

          {/* Image */}
          {player2?.team.abbreviation && (
            <Image
              src={`/nba-logos/${player2.team.abbreviation}.svg`}
              alt='logo'
              width={60}
              height={60}
            />
          )}
        </div>

        {/* Team And Position */}
        <div className={styles.teamAndPosition}>
          {/* Team */}
          <p>{player2?.team.name}</p>
          {/* Position */}
          {player2?.position && (
            <>
              <p className={styles.dot}>•</p>
              <p>{player1Position}</p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
