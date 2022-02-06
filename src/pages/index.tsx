import Head from "next/head";
import styles from "../styles/home.module.scss";

import { Hero } from "../components/Hero";
import { ProjectList } from "../components/ProjectList";
import { Technologies } from "../components/Technologies";
import { BsArrowUpShort } from "react-icons/bs";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

export default function Home() {
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
{/* 
      <button>
        <BsArrowUpShort size={24} color="#f0f0f5" />
      </button> */}
    </div>
  );
}