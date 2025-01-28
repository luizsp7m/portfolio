import styles from "./styles.module.scss";

import { About as AboutType } from "../../types/About";
import Image from "next/image";

interface Props {
  about: AboutType;
}

export function About({ about }: Props) {
  return (
    <div id="sobre-mim" className={styles.container}>
      <h1>Um resumo sobre mim</h1>

      <div className={styles.row}>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: about.description }}
        />

        <div className={styles["image-wrapper"]}>
          <Image
            src="/assets/developer.svg"
            alt="Developer"
            width={315}
            height={315}
            layout="fixed"
            placeholder="blur"
            blurDataURL="/assets/developer.svg"
          />
        </div>
      </div>
    </div>
  );
}
