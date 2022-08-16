import styles from "./styles.module.scss";

import Link from "next/link";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

interface Props {
  currentPage: "home" | "projects" | "404";
}

export function Header({ currentPage }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {currentPage === "home" ? (
          <>
            <Link href="/">
              <a className={styles.logo}>Luiz Oliveira</a>
            </Link>

            <Link href="/projetos/page/1">
              <a>Projetos <FiArrowRight size={16} /></a>
            </Link>
          </>
        ) : (
          <Link href="/">
            <a className={styles.back}><FiArrowLeft size={16} /> Voltar</a>
          </Link>
        )}
      </div>
    </div>
  );
}