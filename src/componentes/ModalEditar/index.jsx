import styles from "./ModalEditar.module.css";
import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import CampoFormulario from "../CampoFormulario";
import ListaCategoria from "../ListaCategoria";
import { BotonFormulario } from "../Boton";
import Textarea from "../../componentes/Textarea"

function ModalEditar({ video, aoFechar, aoSalvar, aoFecharModal, categorias }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [link, setLink] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (video) {
      setTitulo(video.titulo);
      setDescricao(video.descricao);
      setLink(video.link);
      setImagem(video.imagem);
      setCategoria(video.categoria);
    } else {
      setTitulo("");
      setDescricao("");
      setLink("");
      setImagem("");
      setCategoria("");
    }
  }, [video]);

  const submit = (event) => {
    event.preventDefault();
    const videoAtualizado = {
      id: video.id,
      titulo,
      descricao,
      link,
      imagem,
      categoria,
    };
    aoSalvar(videoAtualizado);
    aoFecharModal();
  };

  return (
    <>
      {video && (
        <>
          <div className={styles.overley} />
          <dialog open={!!video} className={styles.modal}>
            <MdOutlineCancel
              onClick={aoFecharModal}
              className={styles.iconeFechar}
            />
            <h1>Editar card</h1>
            <form onSubmit={submit} method="dialog">
              <div className={styles.sessaoCampos}>
                <div className={styles.campos}>
                  <CampoFormulario
                    className={styles.campoModal}
                    obrigatorio={true}
                    label="Título"
                    placeholder="Título"
                    valor={titulo}
                    aoAlterado={(valor) => setTitulo(valor)}
                  />
                  <ListaCategoria
                    obrigatorio={true}
                    label="Categoría"
                    placeholder="Selecione una categoría..."
                    itens={categorias}
                    valor={categoria}
                    aoAlterado={(valor) => setCategoria(valor)}
                  />
                  <CampoFormulario
                    obrigatorio={true}
                    label="Imagen"
                    placeholder="URL de imagen"
                    valor={imagem}
                    aoAlterado={(valor) => setImagem(valor)}
                  />

                  <CampoFormulario
                    obrigatorio={true}
                    label="Vídeo"
                    placeholder="URL del vídeo"
                    valor={link}
                    aoAlterado={(valor) => setLink(valor)}
                  />
                  <Textarea
                    obrigatorio={true}
                    label="Descripción"
                    placeholder="Sobre que es el vídeo?"
                    valor={descricao}
                    aoAlterado={(valor) => setDescricao(valor)}
                  />
                </div>
                <div className={styles.botoes}>
                  <BotonFormulario children="Guardar" type="submit" />
                  <BotonFormulario children="Limpiar" type="reset" />
                </div>
              </div>
            </form>
          </dialog>
        </>
      )}
    </>
  );
}

export default ModalEditar;
