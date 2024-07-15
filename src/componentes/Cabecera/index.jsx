import { Link } from 'react-router-dom'
import styles from './Cabecera.module.css'
import logo from './logo.png'
import { Boton } from '../Boton';

function Cabecera(){
    return(
        <header className={styles.cabecera}>
            <>
                <Link to="./">
                    <img className={styles.logo} src={logo} alt="Logo Alura Latam" />
                </Link>
                <nav className={styles.menu}>
                    <Boton condicion="true" url="./">HOME</Boton>
                    <Boton condicion="true" url="./addvideo">NUEVO VIDEO</Boton>
                </nav>
            </>
        </header>
    )
}

export default Cabecera;
