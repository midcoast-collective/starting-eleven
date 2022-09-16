import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <video autoPlay loop muted playsInline className="video-background">
          <source src="/horizontal.mp4" type="video/mp4" />
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
