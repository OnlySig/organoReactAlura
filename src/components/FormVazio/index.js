import "./FormVazio.css"

export const FormVazio = () => {
    return (
        <div className="container__void">
            <div className="vazio__container">
                <h1 className="title__void">Lista Vazia</h1>
                <p>Por enquanto a lista esta vazia, preencha o formulario para listar seus autores</p>
                <span className="emoji__empty">¯\_(ツ)_/¯</span>
            </div>
        </div>
    )
}