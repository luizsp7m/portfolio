import Link from "next/link";
import styles from "./styles.module.scss";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    setToggled(false);
  }, [router.asPath]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Logo</h1>

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

          <Link href="/#contact" passHref>
            <a>Contato</a>
          </Link>
        </nav>

        <button onClick={() => setToggled(!toggled)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
  );
}