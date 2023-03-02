import { useState } from 'react'
import StatsChart from '@/components/StatsChart'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  const [playerToSearch, setPlayerToSearch] = useState('')
  const [foundPlayers, setFoundPlayers] = useState<any>([])
  const [player1, setPlayer1] = useState<any>(null)
  const [player2, setPlayer2] = useState<any>(null)
  const [player1Stats, setPlayer1Stats] = useState<any>(null)
  const [player2Stats, setPlayer2Stats] = useState<any>(null)

  const handlePlayerSearch = async () => {
    const response = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${playerToSearch}`
    )
    const data = await response.json()
    setFoundPlayers(data.data)
  }

  const handleCompare = async () => {
    const response1 = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player1.id}`
    )
    const data1 = await response1.json()
    setPlayer1Stats(data1.data[0])
    console.log(data1.data[0])

    const response2 = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player2.id}`
    )
    const data2 = await response2.json()
    setPlayer2Stats(data2.data[0])
    console.log(data2.data[0])
  }

  return (
    <>
      {/* <Doughnut data={data} /> */}
      <input
        type='text'
        placeholder='Search Player...'
        value={playerToSearch}
        onChange={(e) => setPlayerToSearch(e.target.value)}
      />

      <button onClick={handlePlayerSearch}>Search</button>

      {foundPlayers.map((player: any) => (
        <div key={player.id}>
          <p>
            {player.first_name} {player.last_name}
          </p>
          <button
            onClick={() => {
              setPlayer1(player)
            }}
          >
            Player 1
          </button>
          <button onClick={() => setPlayer2(player)}>Player 2</button>
        </div>
      ))}

      {player1 && (
        <div>
          <p>
            {player1.first_name} {player1.last_name}
          </p>
        </div>
      )}

      {player2 && (
        <div>
          <p>
            {player2.first_name} {player2.last_name}
          </p>
        </div>
      )}

      <button onClick={handleCompare}>Compare</button>

      {player1Stats && (
        <div>
          <h2>
            {player1.first_name} {player1.last_name}
          </h2>
          <p>Points: {player1Stats.pts}</p>
          {/* <p>Assists: {player1Stats.ast}</p>
          <p>Rebounds: {player1Stats.reb}</p>
          <p>Minutes: {player1Stats.min}</p>
          <p>FG%: {player1Stats.fg_pct}</p>
          <p>3P%: {player1Stats.fg3_pct}</p>
          <p>FT%: {player1Stats.ft_pct}</p>
          <p>FG: {player1Stats.fgm}</p>
          <p>FGA: {player1Stats.fga}</p>
          <p>3P: {player1Stats.fg3m}</p>
          <p>3PA: {player1Stats.fg3a}</p>
          <p>FT: {player1Stats.ftm}</p>
          <p>FTA: {player1Stats.fta}</p>
          <p>ORB: {player1Stats.oreb}</p>
          <p>DRB: {player1Stats.dreb}</p>
          <p>STL: {player1Stats.stl}</p>
          <p>BLK: {player1Stats.blk}</p>
          <p>TOV: {player1Stats.turnover}</p>
          <p>PF: {player1Stats.pf}</p> */}
        </div>
      )}

      {player2Stats && (
        <div>
          <h2>
            {player2.first_name} {player2.last_name}
          </h2>
          <p>Points: {player2Stats.pts}</p>
          {/* <p>Assists: {player2Stats.ast}</p>
          <p>Rebounds: {player2Stats.reb}</p>
          <p>Minutes: {player2Stats.min}</p>
          <p>FG%: {player2Stats.fg_pct}</p>
          <p>3P%: {player2Stats.fg3_pct}</p>
          <p>FT%: {player2Stats.ft_pct}</p>
          <p>FG: {player2Stats.fgm}</p>
          <p>FGA: {player2Stats.fga}</p>
          <p>3P: {player2Stats.fg3m}</p>
          <p>3PA: {player2Stats.fg3a}</p>
          <p>FT: {player2Stats.ftm}</p>
          <p>FTA: {player2Stats.fta}</p>
          <p>ORB: {player2Stats.oreb}</p>
          <p>DRB: {player2Stats.dreb}</p>
          <p>STL: {player2Stats.stl}</p>
          <p>BLK: {player2Stats.blk}</p>
          <p>TOV: {player2Stats.turnover}</p>
          <p>PF: {player2Stats.pf}</p> */}
        </div>
      )}

      {/* Stats Card */}
      {player1Stats && player2Stats && (
        <section className={styles.statsCard}>
          <div className={styles.statisticNumber}>
            {player1Stats.pts.toFixed(1)} {/* 👈 */}
          </div>
          {/* Stats Chart */}
          <div className={styles.chartContainer}>
            <div className={styles.statsTitle}>PPG</div> {/* 👈 */}
            <StatsChart
              player1Statistic={player1Stats.pts} // 👈
              player2Statistic={player2Stats.pts} // 👈
              statisticName='PPG' // 👈
              player1Name={`${player1.first_name} ${player1.last_name}`}
              player2Name={`${player2.first_name} ${player2.last_name}`}
            />
          </div>
          <div className={styles.statisticNumber}>
            {player2Stats.pts.toFixed(1)} {/* 👈 */}
          </div>
        </section>
      )}
    </>
  )
}
