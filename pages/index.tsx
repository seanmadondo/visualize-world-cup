import Image from "next/image";
import { useEffect, useState } from "react";
import { TotalGoalsBar } from "../components/Charts/TotalGoalsBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [totalGoalsData, setTotalGoalsData] = useState<any>([]);

  useEffect(() => {
    fetch("/api/standings", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setTotalGoalsData(json));
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Visualize 2022 World Cup
          <Image
            src="/favicon.svg"
            alt="world-cup-icon"
            width="50"
            height="50"
          ></Image>
        </h1>

        <p className={styles.description}>Overview</p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Most Goals scored</h2>
            <TotalGoalsBar data={totalGoalsData} />
          </a>

          <a className={styles.card}>
            <h2>Matches played</h2>
            <p> Highest Number </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="https://foo.nz" target="_blank" rel="noopener noreferrer">
          Powered by SeanDigital Apps
          <span className={styles.logo}></span>
        </a>
      </footer>
    </div>
  );
}
