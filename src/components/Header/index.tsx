import styles from "./styles.module.scss";

import Link from "next/link";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";
import { SwitchThemeButton } from "./components/SwitchThemeButton";

interface Props {
  currentPage: "home" | "projects" | "404";
}

export function Header({ currentPage }: Props) {
  const { isLightTheme, handleToggleLightTheme } = useTheme();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {currentPage === "home" ? (
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
