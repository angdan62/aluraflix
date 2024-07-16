import styles from './ListaCategoria.module.css'

    function ListaCategoria ({label, aoAlterado, valor, obrigatorio = false, itens, placeholder }) {
    return (
        <div className={styles.listaSuspensa}>
            <label>{label}</label>
            <select className={styles.campoInput}
                placeholder={placeholder} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                value={valor} >
                    <option className={styles.opcoes} value="">Selecione una categoría...</option> 
                {itens.map(iten => {
                    return <option className={styles.opcoes} key={iten}>{iten}</option>
                })}
            </select>
        </div>
    )

}

export default ListaCategoria