import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'
import axios from 'axios';

export default async function PageSpeed() {
  // let data = {
  //   url: "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching",
  //   email: "p.thanakorn@goditgit.net"
  // }
  // try {
  //   await fetch(`https://op8vg1apd5.execute-api.ap-southeast-1.amazonaws.com/develop/PageSpeed`, { 
  //       method: 'POST',
  //       headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(data)
  //     })
  //     .then((response) => response.json())
  //     .then(async (json) => {
  //       for (const data of json) {
  //         console.log('json', data);
  //       }
  //   })
  // } catch (error) {
  //   console.log('error', error);
  // }

  return (
    <main className={styles.main}>
        <h3>Page Speed</h3>
        <Link href="/">Dashboard</Link>
    </main>
  )
}
