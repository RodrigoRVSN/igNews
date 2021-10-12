import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>

      <main className={styles.homeContainer}>
        <section className={styles.homeSection}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get acess to all the publications <span>for $9,90 month</span>
          </p>

          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="person coding" />
      </main>
    </>
  );
}
