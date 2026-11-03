# Compare NBA Players

This is a website that allows you to compare NBA players. It uses a saved 2025–26 [balldontlie](https://www.balldontlie.io/) snapshot (including play-in games) as well as [Chart.js](https://www.chartjs.org/) to display the data.

## Website

- [https://www.comparenbaplayers.com](https://www.comparenbaplayers.com)

#### Screenshot

![screenshot](./screenshot.webp 'screenshot')

## Getting Started

- clone the repo and `cd` into it
- run `npm install` to install the dependencies
- run `npm run dev` to start the development server
- open `localhost:3000` in your browser

## Resources

- [balldontlie API](https://www.balldontlie.io/home.html#players)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2#docs)
- [Chart.js](https://www.chartjs.org/docs/latest/)
- [Nextjs](https://nextjs.org/)
- [React](https://reactjs.org/)

## License

- [MIT](LICENSE.md)

## Snapshot

Normal development and production require no API key or upstream NBA requests. The curated snapshot contains 96 of the 100 requested players; four have no season averages. Profiles and team affiliations reflect the capture date shown in the app.

To optionally export again, set `API_KEY` in your environment or ignored `.env.local`, then run `npm run snapshot:export`. Exporting requires paid balldontlie endpoint access. Requests are paced and resumable through an ignored `.snapshot-export/` checkpoint; remove that directory to start a fresh capture. The exporter preserves existing JSON on failure.

Data retention follows [balldontlie’s terms, particularly sections 6 and 17](https://www.balldontlie.io/terms.html).
