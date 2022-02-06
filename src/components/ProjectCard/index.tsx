import styles from "./styles.module.scss";

import { FiExternalLink } from "react-icons/fi";

export function ProjectCard() {
  return (
    <div className={styles.container}>
      <div className={styles.projectImage}>
        <img src="https://github.com/luizsp7m/frontend-mentor-challenges/raw/master/ecommerce-product-page/public/design/desktop-preview.jpg" alt="" />

        <button>
          <FiExternalLink size={18} color="#f0f0f5" />
        </button>
      </div>

      <div className={styles.projectBody}>
        <h5>Project name</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio reprehenderit ut eius labore mollitia veniam, quas ipsum vel eveniet magni sit</p>
        <div className={styles.tags}>
          <div className={styles.tag}>HTML</div>
          <div className={styles.tag}>CSS</div>
          <div className={styles.tag}>Javascript</div>
        </div>
      </div>
    </div>
  );
}