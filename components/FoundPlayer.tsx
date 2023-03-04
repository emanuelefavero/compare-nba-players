import Image from 'next/image'

import { IPlayer } from '@/types'

interface Props {
  player: IPlayer
  handleAddPlayerForComparison: (player: IPlayer) => void
}

export default function FoundPlayer({
  player,
  handleAddPlayerForComparison,
}: Props) {
  return (
    <>
      {/* Player Info ----- */}
      <h2>
        {player.first_name} {player.last_name}
      </h2>

      {player.team.abbreviation && (
        <Image
          src={`/nba-logos/${player.team.abbreviation}.svg`}
          alt='logo'
          width={40}
          height={40}
        />
      )}

      <h3>{player.team.name}</h3>

      <h4>{player.team.conference}</h4>

      <p>{player.position}</p>

      {player.height_feet && player.height_inches && (
        <h4>{`${player.height_feet}' ${player.height_inches}''`}</h4>
      )}

      {player.weight_pounds && <h4>{`${player.weight_pounds} lbs`}</h4>}

      {/* ----- */}

      <button onClick={() => handleAddPlayerForComparison(player)}>
        Add +
      </button>
    </>
  )
}
