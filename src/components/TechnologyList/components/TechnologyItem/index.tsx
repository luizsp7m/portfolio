import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

import { Technology } from "../../../../types/Technology";

interface Props {
  technology: Technology;
}

export function TechnologyItem({ technology }: Props) {
  return (
    <Link href={`/projetos/${technology.slug}/1`}>
      <a
        aria-label={`Ir para projetos desenvolvidos com ${technology.name}`}
        className={styles.container}
      >
        <Image
          src={technology.logo.url}
          alt={`Logo da tecnologia ${technology.name}`}
          width={27.5}
          height={27.5}
          layout="fixed"
          objectFit="contain"
          blurDataURL={technology.logo.url}
          quality={85}
        />

        <span>{technology.name}</span>
      </a>
    </Link>
  );
}
