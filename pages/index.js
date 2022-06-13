import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Listing Project | Home</title>
        <meta name="keywords" content="lists" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus esse dignissimos similique nesciunt sapiente maxime est nulla. Ab hic, odit dolorem ea aperiam aut rerum. Laborum obcaecati eligendi molestiae possimus?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus esse dignissimos similique nesciunt sapiente maxime est nulla. Ab hic, odit dolorem ea aperiam aut rerum. Laborum obcaecati eligendi molestiae possimus?</p>
        <Link href="/list">
          <a className={styles.btn}>See Listings</a>
        </Link>  
      </div>

    </>
  )
}
