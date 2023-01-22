import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Main from "@/components/Main/Main";
import Header from "@/components/Header/Header";
import AboutUs from "@/components/AboutUs/AboutUs";
import Technologies from "@/components/Technologies/Technologies";
import Steps from "@/components/steps/Steps";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Feedback</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Header />
        <Main />
        <AboutUs />
        <Technologies />
        <Steps/>
      </div>
    </>
  );
}
