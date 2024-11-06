import styles from "./styles.module.scss";

import Link from "next/link";
import clsx from "clsx";

import { Technology } from "../../../../types";
import { useTheme } from "../../../../hooks/useTheme";

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
        <img src={technology.logo.url} alt={technology.name} />

        <span>{technology.name}</span>
      </a>
    </Link>
  );
}
