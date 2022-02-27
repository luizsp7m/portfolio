import Link from "next/link";
import styles from "./styles.module.scss";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

interface HeaderProps {
  to: string;
}

export function Header({ to }: HeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {to === "projetos" && (
          <Link href="/">
            <a className={styles.logo}>Luiz Oliveira</a>
          </Link>
        )}

        {to === "projetos" && (
          <Link href="/projetos/page/1">
            <a>Projetos <FiArrowRight size={16} /></a>
          </Link>
        )}

        {to === "home" && (
          <Link href="/">
            <a className={styles.back}><FiArrowLeft size={16} /> Voltar</a>
          </Link>
        )}
      </div>
    </div>
  );
}