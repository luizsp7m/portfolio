import styles from "./styles.module.scss";

import Link from "next/link";

import { Technology } from "../../types";
import { BsFilterRight, BsX } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Props {
  technologies: Array<Technology>;
}

export function Filter({ technologies }: Props) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const { asPath } = useRouter();

  if (typeof window !== "undefined") { // ==> client side
    document.body.style.overflow = openSidebar ? "hidden" : "auto";
  }

  function isCurrentTechnology(slug: string) {
    return asPath.split("/")[2] === slug;
  }

  useEffect(() => {
    setOpenSidebar(false);
  }, [asPath]);

  return (
    <div className={styles.container}>
      <button type="button" className={styles.button} onClick={() => setOpenSidebar(true)}>
        <BsFilterRight size={20} />
      </button>

      <div className={`${styles.sidebar} ${openSidebar && styles.open}`}>
        <div className={styles.sidebarHeader}>
          <button type="button" className={styles.button} onClick={() => setOpenSidebar(false)}>
            <BsX size={20} />
          </button>
        </div>

        <div className={styles.sidebarBody}>
          {technologies.map(technology => (
            <Link key={technology.id} href={`/projetos/${technology.slug}/page/1`}>
              <a className={`${styles.sidebarItem} ${isCurrentTechnology(technology.slug) && styles.actived}`}>
                <img src={technology.logo.url} alt={technology.name} />
                <span>{technology.name}</span>
              </a>
            </Link>
          ))}

          <Link href={`/projetos/page/1`}>
            <a className={styles.sidebarItem}>
              <img src="/assets/list.svg" alt="Icon" />
              <span>Todos os projetos</span>
            </a>
          </Link>
        </div>
      </div>

      {openSidebar && <div onClick={() => setOpenSidebar(false)} className={styles.background} />}
    </div>
  );
}