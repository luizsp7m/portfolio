import styles from "./styles.module.scss";

import Link from "next/link";

import { Technology } from "../../types";
import { BsFilterRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Props {
  technologies: Array<Technology>;
}

export function Filter({ technologies }: Props) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setOpenDropdown(false);
  }, [router.asPath]);

  return (
    <div className={styles.container}>
      <button className={`${openDropdown && styles.actived}`} onClick={() => setOpenDropdown(!openDropdown)}>
        <BsFilterRight size={20} />
      </button>

      <div className={`${styles.select} ${openDropdown && styles.open}`}>
        {technologies.map(technology => (
          <Link key={technology.id} href={`/projetos/${technology.slug}/page/1`}>
            <a>
              <img src={technology.logo.url} alt={technology.name} />
              {technology.name}
            </a>
          </Link>
        ))}

        <Link href={`/projetos/page/1`}>
          <a>
            <img src="/assets/list.svg" alt="Todos os projetos" />
            Todos os projetos
          </a>
        </Link>
      </div>
    </div>
  );
}