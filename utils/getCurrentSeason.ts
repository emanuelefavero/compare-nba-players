// Since the NBA season starts in October, we have to adjust the year based on the current date. If the current date is before the season start date, we have to subtract 1 from the current year to get the correct season

export default function getCurrentSeason(): number {
  const today = new Date()
  const currentYear = today.getFullYear()

  // TODO: Adjust the season start date based on the NBA season schedule (1 day after the first game)
  const seasonStart = new Date(currentYear, 9, 23) // months are 0-based

  if (today >= seasonStart) return currentYear // e.g. 2024
  else return currentYear - 1 // e.g. 2023
}
