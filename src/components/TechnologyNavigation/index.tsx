import Link from "next/link";
import styles from "./styles.module.scss";

import { Technology } from "../../types";

import { FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface TechnologyNavigationProps {
  technologies: Array<Technology>;
  currentTechnology?: string;
}

export function TechnologyNavigation({ technologies, currentTechnology }: TechnologyNavigationProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setOpenDropdown(false);
  }, [router.asPath]);

  return (
    <div className={styles.container}>
      <div onClick={() => setOpenDropdown(!openDropdown)} className={`${styles.select} ${openDropdown && styles.rotate}`}>
        {currentTechnology ? currentTechnology : "Todos"}
        <FiChevronDown size={18} />
      </div>

      <div className={`${styles.option_group} ${openDropdown && styles.dropdown_open}`}>
        <Link href={`/projetos/page/1`}>
          <a className={styles.option}>Todos</a>
        </Link>

        {technologies.map(technology => (
          <Link key={technology.id} href={`/projetos/${technology.slug}/page/1`}>
            <a className={styles.option}>{technology.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}