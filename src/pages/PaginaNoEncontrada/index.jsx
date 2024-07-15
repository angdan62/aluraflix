import styles from "./PaginaNoEncontrada.module.css";
import { FaExclamationTriangle } from "react-icons/fa";

function PaginaNoEncontrada() {
  return (
    <section className={styles.container}>
      <FaExclamationTriangle className={styles.icono} />
      <h2>
        Ops! <br /> Se ha encontrado un error en la página.
      </h2>
    </section>
  );
}

export default PaginaNoEncontrada;