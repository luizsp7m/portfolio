import styles from "./styles.module.scss";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import { Technology } from "../../../../types/Technology";
import { useTheme } from "../../../../hooks/useTheme";

interface Props {
  technology: Technology;
}

export function TechnologyItem({ technology }: Props) {
  const { isLightTheme } = useTheme();

  return (
    <Link href={`/projetos/${technology.slug}/1`}>
      <a
        aria-label={`Ir para projetos desenvolvidos com ${technology.name}`}
        className={clsx(styles.container, {
          [styles["light-theme"]]: isLightTheme,
        })}
      >
        <Image
          src={technology.logo.url}
          alt={`Logo da tecnologia ${technology.name}`}
          width={27.5}
          height={27.5}
          blurDataURL={technology.logo.url}
          quality={85}
          layout="fixed"
          objectFit="contain"
        />

        <span>{technology.name}</span>
      </a>
    </Link>
  );
}
