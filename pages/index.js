import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header/Header'
import Card from '../components/card/Card'
import Summary from '../components/summary/Summary'
import Goal from '../components/goal/Goal'
import Portfolio from '../components/portfolio/Portfolio'
import Saving from '../components/saving/Saving'
import Blog from '../components/blog/Blog'
import Menu from '../components/menu/Menu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
				<Menu />
				<Header/>
				<Card />
				<Summary />
				<Goal />
				<Portfolio />
				<Saving />
				<Blog />
				
      </main>
    </div>
  )
}
