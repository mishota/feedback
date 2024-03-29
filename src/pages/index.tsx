import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Main from "@/components/Main/Main";
import Header from "@/components/Header/Header";
import AboutUs from "@/components/AboutUs/AboutUs";
import Technologies from "@/components/Technologies/Technologies";
import Steps from "@/components/steps/Steps";
import Questions from "@/components/Questions/Questions";
import Review from "@/components/Review/Review";
import Gallery from "@/components/Gallery/Gallery";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Feedback</title>
        <meta name="description" content="leave your feedback" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Header />
        <Main />
        <AboutUs />
        <Technologies />
        <Steps />
        <Questions />
        <Review />
        <Gallery />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}
