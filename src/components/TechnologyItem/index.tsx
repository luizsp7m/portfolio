import styles from "./styles.module.scss";

import Link from "next/link";
import Image from "next/image";

import { Technology } from "../../types";

interface Props {
  technology: Technology;
}

export function TechnologyItem({ technology }: Props) {
  return (
    <Link href={`/projetos/${technology.slug}/page/1`}>
      <a className={styles.container}>
        <Image
          src={technology.logo.url}
          alt={technology.name}
          width={27.5}
          height={27.5}
          objectFit="contain"
        />

        <span>{technology.name}</span>
      </a>
    </Link>
  );
}