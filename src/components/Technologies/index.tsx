import styles from "./styles.module.scss";

export function Technologies() {
  return (
    <div id="technologies" className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Tecnologias</h1>
        <p>Principais tecnologias que eu tenho conhecimento e uso no dia a dia no desenvolvimento de aplicações</p>
        <div className={styles.technologies}>
          <div className={styles.tech}>
            <img src="/assets/html.svg" alt="" />
            <span>HTML</span>
          </div>

          <div className={styles.tech}>
            <img src="/assets/css.svg" alt="" />
            <span>CSS</span>
          </div>

          <div className={styles.tech}>
            <img src="/assets/js.svg" alt="" />
            <span>Javascript</span>
          </div>

          <div className={styles.tech}>
            <img src="/assets/ts.svg" alt="" />
            <span>Typescript</span>
          </div>

          <div className={styles.tech}>
            <img src="/assets/react.svg" alt="" />
            <span>React</span>
          </div>

          <div className={styles.tech}>
            <img src="/assets/next.svg" alt="" />
            <span>Next.js</span>
          </div>

          <div className={styles.tech}>
            <img src="/assets/sass.svg" alt="" />
            <span>Sass</span>
          </div>

          <div className={styles.tech}>
            <img src="/assets/firebase.svg" alt="" />
            <span>Firebase</span>
          </div>

          <div className={styles.tech}>
            <img src="/assets/prismic.svg" alt="" />
            <span>Prismic</span>
          </div>

          <div className={styles.tech}>
            <img src="/assets/styled-components.svg" alt="" />
            <span>St. Components</span>
          </div>

          <div className={styles.tech}>
            <img src="/assets/datocms.svg" alt="" />
            <span>Dato CMS</span>
          </div>

          <div className={styles.tech}>
            <img src="/assets/figma.svg" alt="" />
            <span>Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
}