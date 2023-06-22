
import styles from "./rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      
      <p>Desenvolvido por <a target="blanc" href="https://github.com/wendelpaesx">Wendel Paes</a></p>
    </footer>
  );
}