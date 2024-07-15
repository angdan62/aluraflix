import { Outlet } from 'react-router-dom'
import Cabecera from '../../componentes/Cabecera'
import PieDePagina from '../../componentes/PieDePagina'


function PaginaBase() {
    
    return (
        <main>
            <Cabecera />
            <Outlet />
            <PieDePagina />
        </main>

    )

}

export default PaginaBase