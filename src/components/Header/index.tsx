import Link from "next/link";
import styles from "./styles.module.scss";

import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";

interface HeaderProps {
  showNavbar: boolean;
}

export function Header({ showNavbar }: HeaderProps) {
  const router = useRouter();

  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    setToggled(false);
  }, [router.asPath]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a>
            <img src="/assets/logo.svg" alt="Logo" />
          </a>
        </Link>

        {showNavbar && (
          <Fragment>
            <nav className={`${toggled ? styles.toggled : ""}`}>
              <Link href="/#home" passHref>
                <a>Início</a>
              </Link>

              <Link href="/#about" passHref>
                <a>Sobre mim</a>
              </Link>

              <Link href="/#projects" passHref>
                <a>Projetos</a>
              </Link>

              <Link href="/#technologies" passHref>
                <a>Tecnologias</a>
              </Link>
            </nav>

            <button onClick={() => setToggled(!toggled)}>
              <div></div>
              <div></div>
              <div></div>
            </button>
          </Fragment>
        )}

        {!showNavbar && (
          <Link href="/react/page/1">
            <a>Projetos <FiArrowRight className={styles.icon} size={16} /></a>
          </Link>
        )}
      </div>
    </div>
  );
}