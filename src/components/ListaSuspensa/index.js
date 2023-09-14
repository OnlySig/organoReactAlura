import "./ListaSuspensa.css"

export const ListaSuspensa = (props) => {

    // const valores = e => {
    //     props.alterarElement(e.target.value)
    // }

    return (
        <div className="lista__container">
            <label className="label__item" htmlFor="">{props.label}</label>
            <select value = {props.valor} onChange = {e => props.alterarElement(e.target.value)} required = {props.obrigatorio} className="select__item">
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}