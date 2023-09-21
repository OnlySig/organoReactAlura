import "./CampoTexto.css"

export const CampoTexto = (props) => {
    const placeholderMod = `Digite o ${props.placeholder}`
    const imagem = `Informe o endeceço da imagem`
    const stars = `Informe a quantidade de estrelas` 

    const valores = e => {
        props.alterarElement(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} value={props.valor} onChange={valores} required={props.obrigatorio} type={props.tipo} placeholder={props.placeholder === 'imagem' ? imagem : placeholderMod && props.placeholder === 'stars' ? stars : placeholderMod}/>
        </div>
    )
}