import styles from "./styles.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <nav>
        <a href="#">Início</a>
        <a href="#">Quem sou</a>
        <a href="#">Projetos</a>
        <a href="#">Tecnologias</a>
        <a href="#">Contato</a>
      </nav>
    </div>
  );
}