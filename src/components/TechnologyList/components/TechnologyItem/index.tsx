import styles from "./styles.module.scss";

import Link from "next/link";
import clsx from "clsx";

import { Technology } from "../../../../types";
import { useTheme } from "../../../../hooks/useTheme";
import Image from "next/image";

interface Props {
  technology: Technology;
}

export function TechnologyItem({ technology }: Props) {
  const { isLightTheme } = useTheme();

  return (
    <Link href={`/projetos/${technology.slug}/1`}>
      <a
        className={clsx(styles.container, {
          [styles["light-theme"]]: isLightTheme,
        })}
      >
        <Image
          src={technology.logo.url}
          alt={technology.name}
          width={27.5}
          height={27.5}
          blurDataURL={technology.logo.url}
          quality={85}
          layout="fixed"
          objectFit="contain"
        />

        {/* <img src={technology.logo.url} alt={technology.name} /> */}

        <span>{technology.name}</span>
      </a>
    </Link>
  );
}
