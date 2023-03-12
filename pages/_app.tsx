import '@/styles/globals.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Compare NBA Players</title>
        <meta
          name='description'
          content='Compare NBA players stats to win arguments with your friends.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='UTF-8' />
        <meta name='theme-color' content='#0f1622' />

        {/* Open Graph */}
        <meta property='og:title' content='Compare NBA Players' />
        <meta
          property='og:description'
          content='Compare NBA players stats to win arguments with your friends.'
        />
        <meta
          property='og:image'
          content='https://compare-nba-players.vercel.app/favicon.ico'
        />
        <meta
          property='og:image:alt'
          content='Logo of the Compare NBA Players app.'
        />
        <meta
          property='og:url'
          content='https://compare-nba-players.vercel.app'
        />
        <meta property='og:type' content='website' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@emanuele_dev' />
        <meta name='twitter:creator' content='@emanuele_dev' />
        <meta name='twitter:title' content='Compare NBA Players' />
        <meta
          name='twitter:description'
          content='Compare NBA players stats to win arguments with your friends.'
        />
        <meta
          name='twitter:image'
          content='https://compare-nba-players.vercel.app/favicon.ico'
        />

        {/* Linkedin */}
        <meta property='linkedin:title' content='Compare NBA Players' />
        <meta
          property='linkedin:description'
          content='Compare NBA players stats to win arguments with your friends.'
        />
        <meta
          property='linkedin:image'
          content='https://compare-nba-players.vercel.app/favicon.ico'
        />
        <meta property='linkedin:siteName' content='Compare NBA Players' />
        <meta
          property='linkedin:url'
          content='https://compare-nba-players.vercel.app'
        />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
