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
          website, which allows users to easily compare the stats of active NBA
          players in a 1v1 setting. Whether you&apos;re settling an argument
          with a friend or just curious about how two players stack up against
          each other, this platform makes it easy to find the information you
          need.
        </p>
        <p>
          This website is designed with the user in mind. I&apos;ve created an
          intuitive interface that allows you to search for any two players and
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
          {new Date().getFullYear()} active NBA players
        </aside>
      </main>

      <Footer />
    </>
  )
}
