import styles from "../styles/404.module.scss";

import { Layout } from "../layout";

export default function NotFound() {
  return (
    <Layout title="Página não encontrada">
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/assets/404.svg" alt="404 Image" />
        </div>

        <h1>Página não encontrada</h1>
      </div>
    </Layout>
  );
}
