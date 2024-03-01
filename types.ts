export interface IPlayer {
  first_name: string
  height?: number
  id: number
  last_name: string
  position?: string
  team: {
    abbreviation: string
    city: string
    conference: string
    division: string
    full_name: string
    id: number
    name: string
  }
  weight?: number
}

export interface IPlayerStats {
  pts: number
  ast: number
  reb: number
  fg_pct: number
  fg3_pct: number
  ft_pct: number
  fgm: number
  fga: number
  fg3m: number
  fg3a: number
  ftm: number
  fta: number
  oreb: number
  dreb: number
  stl: number
  blk: number
  turnover: number
  pf: number
}
