export default function getTeamColor(
  teamName: string | undefined,
  opacity = 1
): string {
  switch (teamName) {
    case 'Hawks':
      return `rgba(224,58,62,${opacity})`
    case 'Celtics':
      return `rgba(0,122,51,${opacity})`
    case 'Nets':
      return `rgba(60,60,60,${opacity})`
    case 'Hornets':
      return `rgba(29,17,96,${opacity})`
    case 'Bulls':
      return `rgba(206,17,65,${opacity})`
    case 'Cavaliers':
      return `rgba(134,0,56,${opacity})`
    case 'Mavericks':
      return `rgba(0,83,188,${opacity})`
    case 'Nuggets':
      return `rgba(13,34,64,${opacity})`
    case 'Pistons':
      return `rgba(200,16,46,${opacity})`
    case 'Warriors':
      return `rgba(29,66,138,${opacity})`
    case 'Rockets':
      return `rgba(206,17,65,${opacity})`
    case 'Pacers':
      return `rgba(0,45,98,${opacity})`
    case 'Clippers':
      return `rgba(200,16,46,${opacity})`
    case 'Lakers':
      return `rgba(85,37,130,${opacity})`
    case 'Grizzlies':
      return `rgba(93,118,169,${opacity})`
    case 'Heat':
      return `rgba(152,0,46,${opacity})`
    case 'Bucks':
      return `rgba(0,71,27,${opacity})`
    case 'Timberwolves':
      return `rgba(12,35,64,${opacity})`
    case 'Pelicans':
      return `rgba(0,22,65,${opacity})`
    case 'Knicks':
      return `rgba(0,107,182,${opacity})`
    case 'Thunder':
      return `rgba(0,125,195,${opacity})`
    case 'Magic':
      return `rgba(0,125,195,${opacity})`
    case '76ers':
      return `rgba(237,23,76,${opacity})`
    case 'Suns':
      return `rgba(229,95,32,${opacity})`
    case 'Trail Blazers':
      return `rgba(224,58,62,${opacity})`
    case 'Kings':
      return `rgba(91,43,130,${opacity})`
    case 'Spurs':
      return `rgba(196,206,211,${opacity})`
    case 'Raptors':
      return `rgba(206,17,65,${opacity})`
    case 'Jazz':
      return `rgba(0,43,92,${opacity})`
    case 'Wizards':
      return `rgba(0,43,92,${opacity})`
    default:
      return `rgba(0,0,0,${opacity})`
  }
}
