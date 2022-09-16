import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Starting Eleven / Coming Soon...</title>
        <meta name="description" content="Starting Eleven / Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <video autoPlay loop muted playsInline className={styles.horizontal}>
          <source src="/horizontal.mp4" type="video/mp4" />
        </video>
        <video autoPlay loop muted playsInline className={styles.vertical}>
          <source src="/vertical.mp4" type="video/mp4" />
        </video>
      </main>

      <footer className={styles.footer}>
        <p>
          <small>&copy; 2022. Starting Eleven. All rights reserved.</small>
        </p>
      </footer>
    </div>
  );
}
