import Link from "next/link";
import styles from "./styles.module.scss";

import { Technology } from "../../types";

interface TechnologyNavigationProps {
  technologies: Array<Technology>;
  technologyId?: string;
}


export function TechnologyNavigation({ technologies, technologyId = "" }: TechnologyNavigationProps) {

  return (
    <div className={styles.container}></div>
  );
}