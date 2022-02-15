import Link from "next/link";
import styles from "./styles.module.scss";

import { FiArrowRight } from "react-icons/fi";

interface HeaderProps {
  destination: string;
}

export function Header({ destination }: HeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Logo</h1>

        {destination === "home" && (
          <Link href="/" passHref>
            <a>Início <FiArrowRight className={styles.icon} size={16} /></a>
          </Link>
        )}

        {destination === "projects" && (
          <Link href="/projects/react" passHref>
            <a>Projetos <FiArrowRight className={styles.icon} size={16} /></a>
          </Link>
        )}
      </div>
    </div>
  );
}