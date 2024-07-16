import styles from "./Formulario.module.css";
import { useState } from "react";
import fetch from "cross-fetch";
import { api } from "../../api";
import CampoFormulario from "../CampoFormulario";
import ListaCategoria from "../ListaCategoria";
import Textarea from "../Textarea";
import { BotonFormulario } from "../Boton";

function Formulario({ aoCadastrar, categorias }) {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    imagem: '',
    link: '',
    categoria: '',
  });

  const limpiarFormulario = () => {
    setFormData({
      titulo: '',
      descricao: '',
      imagem: '',
      link: '',
      categoria: '',
    });
  };

  const aoSalvar = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("El video se ha añadido con éxito.");
        limpiarFormulario();
        aoCadastrar(formData);
      }
    } catch (error) {
      alert(
        "Se ha encontado un error al intentar subir el video. Intentelo más tarde."
      );
    }
  };

  return (
    <form
      onSubmit={aoSalvar}
      onReset={limpiarFormulario}
      className={styles.formulario}
    >
      <div className={styles.cabecalho}>
        <h1>Nuevo Vídeo</h1>
        <p>Complete el formulario para añadir un nuevo vídeo a la colección.</p>
      </div>

      <div className={styles.sessaoCampos}>
        <h2>Crear Tarjeta</h2>
        <div className={styles.campos}>
          <CampoFormulario
            obrigatorio={true}
            label="Título"
            placeholder="Ingrese el título"
            valor={formData.titulo}
            aoAlterado={(valor) => setFormData({ ...formData, titulo: valor })}
            tipo="text"
            minLength="3"
            maxLength=""
          />
          <ListaCategoria
            obrigatorio={true}
            label="Categoría"
            placeholder="Selecione una categoría..."
            itens={categorias}
            valor={formData.categoria}
            aoAlterado={(valor) =>
              setFormData({ ...formData, categoria: valor })
            }
          />
          <CampoFormulario
            obrigatorio={true}
            label="Imagen"
            placeholder="URL de la imagen"
            valor={formData.imagem}
            aoAlterado={(valor) => setFormData({ ...formData, imagem: valor })}
            tipo="url"
          />

          <CampoFormulario
            obrigatorio={true}
            label="Vídeo"
            placeholder="URL del vídeo"
            valor={formData.link}
            aoAlterado={(valor) => setFormData({ ...formData, link: valor })}
            tipo="url"
          />
          <Textarea
            obrigatorio={true}
            label="Descripción"
            placeholder="¿Sobre que es el vídeo?"
            valor={formData.descricao}
            aoAlterado={(valor) =>
              setFormData({ ...formData, descricao: valor })
            }
            tipo="text"
            minLength="10"
            maxLength="250"
          />
        </div>
        <div className={styles.botoes}>
            <BotonFormulario 
                children = "Guardar"
                type="submit"
            />
            <BotonFormulario 
                children = "Limpiar"
                type="reset"
            />
        </div>
      </div>
    </form>
  );
}

export default Formulario;
