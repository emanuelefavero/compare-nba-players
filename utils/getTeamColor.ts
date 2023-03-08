export default function getTeamColor(
  teamName: string | undefined,
  opacity = 1
): string {
  switch (teamName) {
    case 'Hawks':
      return `rgba(224,58,62,${opacity})`
    case 'Celtics':
      return `rgba(2,131,70,${opacity})`
    case 'Nets':
      return `rgba(60,60,60,${opacity})`
    case 'Hornets':
      return `rgba(2,121,141,${opacity})`
    case 'Bulls':
      return `rgba(206,6,62,${opacity})`
    case 'Cavaliers':
      return `rgba(108,35,58,${opacity})`
    case 'Mavericks':
      return `rgba(0,126,199,${opacity})`
    case 'Nuggets':
      return `rgba(20,51,96,${opacity})`
    case 'Pistons':
      return `rgba(202,6,41,${opacity})`
    case 'Warriors':
      return `rgba(27,63,130,${opacity})`
    case 'Rockets':
      return `rgba(195,18,61,${opacity})`
    case 'Pacers':
      return `rgba(241,177,46,${opacity})`
    case 'Clippers':
      return `rgba(190,16,44,${opacity})`
    case 'Lakers':
      return `rgba(81,36,125,${opacity})`
    case 'Grizzlies':
      return `rgba(88,112,161,${opacity})`
    case 'Heat':
      return `rgba(144,1,45,${opacity})`
    case 'Bucks':
      return `rgba(12,67,30,${opacity})`
    case 'Timberwolves':
      return `rgba(12,32,60,${opacity})`
    case 'Pelicans':
      return `rgba(0,44,130,${opacity})`
    case 'Knicks':
      return `rgba(232,126,36,${opacity})`
    case 'Thunder':
      return `rgba(0,122,193,${opacity})`
    case 'Magic':
      return `rgba(11,113,180,${opacity})`
    case '76ers':
      return `rgba(27,63,130,${opacity})`
    case 'Suns':
      return `rgba(217,91,31,${opacity})`
    case 'Trail Blazers':
      return `rgba(208,4,39,${opacity})`
    case 'Kings':
      return `rgba(87,42,123,${opacity})`
    case 'Spurs':
      return `rgba(186,195,201,${opacity})`
    case 'Raptors':
      return `rgba(180,26,31,${opacity})`
    case 'Jazz':
      return `rgba(18,48,91,${opacity})`
    case 'Wizards':
      return `rgba(215,23,52,${opacity})`
    default:
      return `rgba(45,55,75,${opacity})`
  }
}
