import styles from '@/styles/About.module.scss'
import Head from 'next/head'
import { useRouter } from 'next/router'
import AboutHeader from '@/components/AboutHeader'
import Footer from '@/components/Footer'

export default function About() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>About This Website</title>
      </Head>

      <AboutHeader />

      <main className={styles.about}>
        <h1>About This Website</h1>

        <p>
          As a software engineer and avid NBA fan, I found myself constantly
          engaged in debates with my friends about which player had better stats
          in a head-to-head matchup. That&apos;s why I decided to build this
          website, which allows users to easily compare the season averages of NBA
          players in a 1v1 setting. Whether you&apos;re settling an argument
          with a friend or just curious about how two players stack up against
          each other, this platform makes it easy to find the information you
          need.
        </p>
        <p>
          This website is designed with the user in mind. I&apos;ve created an
          intuitive interface that allows you to search for two included players and
          see their head-to-head statistics across a range of categories,
          including points, rebounds, assists, and more.
        </p>
        <p>
          I am constantly working to improve the platform and add new features,
          so be sure to check back regularly for updates. Thank you for visiting
          my website, and I hope you find it as useful as I do in settling
          arguments with your friends!
        </p>

        <aside>
          <b>Please note:</b> as of right now, you can only compare{' '}
          2025–26 players available in this curated snapshot
        </aside>
        <p>Data comes from balldontlie’s legacy season averages endpoint and includes play-in games. Player profiles and team affiliations reflect the capture date rather than historical season rosters.</p>
        <p>Source: <a href='https://www.balldontlie.io/'>balldontlie</a>. Retained data is used under <a href='https://www.balldontlie.io/terms.html'>the published terms, sections 6 and 17</a>.</p>
      </main>

      <Footer />
    </>
  )
}
