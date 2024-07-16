import { useEffect, useState } from "react";
import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import PaginaNoEncontrada from "../PaginaNoEncontrada";

function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(`${api}?id=${parametros.id}`)
      .then((respuesta) => respuesta.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, [parametros.id]);

  if (!video) {
    return <PaginaNoEncontrada />;
  }
  return (
    <section className={styles.conteudo}>
      <h1 className={styles.titulo}>{video.titulo}</h1>
      <p className={styles.descricao}>{video.descricao}</p>
      <div className={styles.containerVideo}>
        <iframe
          className={styles.video}
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowfullscreen=""
        ></iframe>
      </div>
    </section>
  );
}

export default Player;
