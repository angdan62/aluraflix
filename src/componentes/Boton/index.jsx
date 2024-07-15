import{Link, useLocation } from 'react-router-dom'
import styles from "./Boton.module.css"

export const Boton = ({ url, children}) => {

    const paginaActual= useLocation();

    let claseBoton = '';

    if(paginaActual.pathname === '/'){
        if(url === './'){
            claseBoton = styles.botonDestacado
        }else{ claseBoton = styles.boton }
    }else if (paginaActual.pathname === './addvideo'){
        if(url === './addvideo'){
            claseBoton = styles.botonDestacado
        }else { claseBoton = styles.boton}
    }else{
        claseBoton = styles.boton
    }

    return(
        <Link to={url} className={claseBoton}>
            {children}
        </Link>
    )
    
}

export const BotonFormulario = ({type, children}) => {
    const claseBoton = type === 'submit' ? styles.botonDestacado : styles.boton;

    return <button className={claseBoton} type={type}>{children}</button>
}
