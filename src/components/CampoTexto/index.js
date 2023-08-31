import "./CampoTexto.css"

export const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input type="text" placeholder={`Digite seu ${props.placeholder}`}/>
        </div>
    )
}