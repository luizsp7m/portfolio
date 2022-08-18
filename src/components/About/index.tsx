import styles from "./styles.module.scss";

export function About() {
  return (
    <div id="sobre-mim" className={styles.container}>
      <h1>Um resumo sobre mim</h1>

      <div className={styles.row}>
        <div className={styles.description}>
          <p>Olá, meu nome é Luiz, tenho 21 anos, moro em Ourinhos - SP, sou tecnólogo em análise e desenvolvimento de sistemas (2018 - 2020) e desenvolvedor web front-end.</p>
          <p>Minha trajetória na programação começou em 2018 e desde então eu tive contato com várias linguagens de programação, como por exemplo C, PHP, Java e Javascript.</p>
          <p>Como não possuo experiência profissional na área, estou sempre colocando em prática meus conhecimentos em projetos pessoais.</p>
          <p>Desenvolvi esse portfólio com o objetivo de expor esses projetos pessoais e demonstrar minhas habilidades para que as empresas vejam que sou um profissional capacitado.</p>
        </div>

        <div className={styles.image}>
          <img
            src="/assets/developer.svg"
            alt="Developer"
          />
        </div>
      </div>
    </div >
  );
}