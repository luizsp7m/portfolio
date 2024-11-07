import styles from "./styles.module.scss";

import Link from "next/link";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { SwitchThemeButton } from "./components/SwitchThemeButton";

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
              <a className={styles.logo}>Luiz Oliveira</a>
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <SwitchThemeButton />

              <Link href="/projetos/1">
                <a>
                  Projetos <FiArrowRight size={16} />
                </a>
              </Link>
            </div>
          </>
        ) : (
          <div>
            <Link href="/">
              <a className={styles.back}>
                <FiArrowLeft size={16} /> Voltar
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
