import styles from "./PieDePagina.module.css";
import logo from './logo.png';
import { Link } from 'react-router-dom';
import {IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function PieDePagina(){
    return(
        <footer className={styles.pieDePagina}>
            <Link to="./" className={styles.logo}>
                <img src={logo} alt="LogoAluraflix" />
            </Link>
            <h2 className={styles.texto}>Desarrollado por Angel Villa. 2024.</h2>
            <div className={styles.redes_sociales}>
            <a href="https://github.com/angdan62" target="_blank" rel="noopener noreferrer" >
                <IoLogoGithub className={styles.icono} alt="imagen github" />
            </a>
            <a href="https://www.linkedin.com/in/angel-cesar-villa-flores-21033b1b0/" target="_blank" rel="noopener noreferrer" >
            <IoLogoLinkedin className={styles.icono} alt="imagen linkedin" />
            </a>
            <a href="https://www.instagram.com/angelceesar/" target="_blank" rel="noopener noreferrer" >
            <IoLogoInstagram className={styles.icono} alt="imagen instagram" />
            </a>
            </div>
        </footer>
    )
}

export default PieDePagina;