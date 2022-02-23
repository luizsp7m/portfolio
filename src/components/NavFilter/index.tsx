import { GetServerSideProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getTechnologies } from "../../services/datocms";
import { Technology } from "../../types";

import styles from "./styles.module.scss";

export function NavFilter() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  async function loadTechnologies() {
    await getTechnologies().then(response => {
      setTechnologies(response);
    })
  }

  useEffect(() => {
    loadTechnologies();
  }, []);

  return (
    <div className={styles.container}>
      {technologies.map(technology => (
        <div className={styles.technology}>
          <Link key={technology.id} href={`/${technology.slug}/page/1`} passHref>
            <a>{ technology.name }</a>
          </Link>
        </div>
      ))}
    </div>
  );
}