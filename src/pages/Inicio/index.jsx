import { useEffect, useState } from "react";
import styles from "./Inicio.module.css";
import Banner from "../../componentes/Banner";
import categorias from '../../json/categorias.json'
import {api} from "../../api.js"
import SesionPorCategoria from "../../componentes/SesionPorCategoria/index.jsx";
import ModalEditar from "../../componentes/ModalEditar/index.jsx";
import ModalPlay from "../../componentes/ModalPlay/index.jsx";

function Inicio(){

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch(api)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    function deletarVideo(id) {
        setVideos(videos.filter(video => video.id !== id))
    }

    const [videoSelecionado, setVideoSelecionado] = useState(null)
    const [videoVer, setVideoVer] = useState(null)


    const editarVideo = (video) => {
        setVideoSelecionado(video)
    }

    const fecharModal = () => {
        setVideoSelecionado(null)
        setVideoVer(null)
    }

    const atualizarVideo = (videoAtualizado) => {
        setVideos(videos.map(video => {
            if (video.id === videoAtualizado.id) {
                return videoAtualizado
            }
            return video
        }))
        setVideoSelecionado(null)
    }

    const verVideo = (video) => {
        setVideoVer(video)
    }

    const [topoPagina, setTopoPagina] = useState(false)
    
    const irAoTopo = () => {
        setTopoPagina(true)
        window.scrollTo(0, 0)
    }

    return(
        <>
            <Banner 
                categoria={categorias}
                aoVerVideo={verVideo}    
            />
            <section className={styles.categorias}>
                {categorias.map((categoria, indice) => <SesionPorCategoria
                    key={indice}
                    categoria={categoria}
                    videos={videos.filter(video => video.categoria === categoria.nome)}
                    aoDeletar={deletarVideo}
                    aoEditar={editarVideo}
                    aoVerVideo={verVideo}
                    aoTopo={irAoTopo}
                />)}
            </section>
            <ModalEditar
                video={videoSelecionado}
                aoSalvar={atualizarVideo}
                aoFecharModal={fecharModal}
                categorias={categorias.map((categoria) => categoria.nome)} />
            <ModalPlay 
                video={videoVer}
                aoFecharModal={fecharModal} />
        </>
    )
}

export default Inicio;