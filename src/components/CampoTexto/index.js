import "./CampoTexto.css"

export const CampoTexto = (props) => {
    const placeholderMod = `Digite seu ${props.placeholder}`
    const imagem = `Informe o endeceço da imagem`

    const valores = e => {
        props.alterarElement(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input value={props.valor} onChange={valores} required={props.obrigatorio} type="text" placeholder={props.placeholder === 'imagem' ? imagem : placeholderMod}/>
        </div>
    )
}