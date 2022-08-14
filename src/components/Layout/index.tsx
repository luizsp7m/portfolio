import styles from "./styles.module.scss";

import Head from "next/head";

import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Menu } from "../Menu";

interface Props {
  title: string;
  children: ReactNode;
  currentPage: "home" | "projects";
}

export function Layout({ title, children, currentPage }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <Header currentPage={currentPage} />

      <div className={styles.main}>
        {children}
      </div>

      <Footer currentPage={currentPage} />

      {currentPage === "home" && <Menu />}
    </div>
  );
}