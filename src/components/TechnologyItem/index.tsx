import styles from "./styles.module.scss";

import Link from "next/link";

import { Technology } from "../../types";

interface Props {
  technology: Technology;
}

export function TechnologyItem({ technology }: Props) {
  return (
    <Link href={`/projetos/${technology.slug}/page/1`}>
      <a className={styles.container}>
        <img
          src={technology.logo.url}
          alt={technology.name}
        />

        <span>{technology.name}</span>
      </a>
    </Link>
  );
}