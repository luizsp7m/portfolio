import styles from "./styles.module.scss";

import Head from "next/head";

import { Fragment, ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { ButtonToTop } from "../components/ButtonToTop";

interface Props {
  title: string;
  children: ReactNode;
  isHomepage?: boolean;
}

export function Layout({ title, children, isHomepage = false }: Props) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={styles.container}>
        <Header isHomepage={isHomepage} />

        <div className={styles.main}>{children}</div>

        <Footer isHomepage={isHomepage} />

        <ButtonToTop />

        {isHomepage && <Menu />}
      </div>
    </Fragment>
  );
}
