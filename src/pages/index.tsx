import Head from "next/head";
import styles from "../styles/home.module.scss";
import Aos from "aos";

import { Hero } from "../components/Hero";
import { ProjectList } from "../components/ProjectList";
import { Technologies } from "../components/Technologies";
import { BsArrowUpShort } from "react-icons/bs";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Contact } from "../components/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Luiz Oliveira - Portfólio</title>
      </Head>

      <Header />
      <Menu />
      <Hero />
      <ProjectList />
      <Technologies />
      <Contact />
{/* 
      <button>
        <BsArrowUpShort size={24} color="#f0f0f5" />
      </button> */}
    </div>
  );
}