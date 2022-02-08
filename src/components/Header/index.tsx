import styles from "./styles.module.scss";

import { BsFillSunFill } from "react-icons/bs";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Logo</h1>

        <button>
          <BsFillSunFill size={18} color="var(--text-primary)" />
        </button>
      </div>
    </div>
  );
}