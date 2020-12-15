import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header/Header'
import Card from '../components/card/Card'
import Summary from '../components/summary/Summary'
import Goal from '../components/goal/Goal'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
				<Header/>
				<Card />
				<Summary />
				<Goal />
      </main>
    </div>
  )
}
