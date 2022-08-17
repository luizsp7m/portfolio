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

  const { asPath } = useRouter();

  useEffect(() => {
    setOpenDropdown(false);
  }, [asPath]);

  return (
    <div className={styles.container}>
      <button type="button" className={`${openDropdown && styles.actived}`} onClick={() => setOpenDropdown(!openDropdown)}>
        <BsFilterRight size={20} />
      </button>

      <div className={`${styles.select} ${openDropdown && styles.open}`}>
        {technologies.map(technology => (
          <Link key={technology.id} href={`/projetos/${technology.slug}/page/1`}>
            <a>
              <img
                src={technology.logo.url}
                alt={technology.name}
              />

              <span>{technology.name}</span>
            </a>
          </Link>
        ))}

        <Link href={`/projetos/page/1`}>
          <a>
            <img
              src="/assets/list.svg"
              alt="Icon"
            />

            <span>Todos os projetos</span>
          </a>
        </Link>
      </div>
    </div>
  );
}