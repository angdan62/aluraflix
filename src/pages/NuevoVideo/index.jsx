import { useEffect, useState } from "react";
import styles from "./NuevoVideo.module.css";
import {api} from "../../api.js";
import Formulario from "../../componentes/Formulario/index.jsx";
import categorias from "../../json/categorias.json";

function NuevoVideo(){

    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        fetch(api)
        .then(response => response.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])

    const adicionarNuevoVideo = (nuevoVideo) =>{
        setVideos((prevVideos) => [...prevVideos, nuevoVideo])
    }

    return (
            <Formulario 
                className={styles.formulario}
                aoCadastrar={adicionarNuevoVideo}
                categorias={categorias.map((categoria) => categoria.nome)}
            />
    ) 
}

export default NuevoVideo;