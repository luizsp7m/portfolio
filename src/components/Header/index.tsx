import Link from "next/link";
import styles from "./styles.module.scss";

import { FiArrowRight } from "react-icons/fi";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Link href="/">
          <a className={styles.logo}>Luiz Oliveira</a>
        </Link>

        <Link href="/projetos/page/1">
          <a>Projetos <FiArrowRight size={16} /></a>
        </Link>
      </div>
    </div>
  );
}