import styles from "./styles.module.scss";
import Link from "next/link";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

interface Props {
  isHomepage: boolean;
}

export function Header({ isHomepage }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {isHomepage ? (
          <>
            <Link href="/">
              <a className={styles.logo} aria-label="Ir para início">
                Luiz Oliveira
              </a>
            </Link>

            <Link href="/projetos/1">
              <a aria-label="Ir para projetos">
                Projetos <FiArrowRight size={16} />
              </a>
            </Link>
          </>
        ) : (
          <Link href="/">
            <a className={styles.back} aria-label="Voltar para início">
              <FiArrowLeft size={16} /> Voltar para o início
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
