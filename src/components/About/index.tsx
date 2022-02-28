import styles from "./styles.module.scss";

export function About() {
  return (
    <div data-aos="fade-in" id="about" className={styles.container}>
      <h1>Sobre mim</h1>

      <div className={styles.description}>
        <p>Olá, meu nome é Luiz, tenho 21 anos, moro no interior de São Paulo e sou tecnólogo em análise e desenvolvimento de sistemas.</p>
        <p>Minha trajetória na programação começou em 2018 e desde então tive contato com várias linguagens de programação, como Java, C, Python, PHP, mas logo me identifiquei com o desenvolvimento web, especificamente pelo front-end.</p>
        <p>Comecei estudando HTML, CSS e Javascript, passando por jQuery e Bootstrap até chegar em React e Next.js onde a cada dia estou buscando aprimorar meus conhecimentos.</p>
      </div>
    </div>
  );
}