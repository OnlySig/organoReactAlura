import "./HeaderCard.css"

export const HeaderCard = (props) => {
    return(
        <div className="card__header">
            <div className="titleCard">
                <h1 className="title__header">{props.titleHeader}</h1>
                <span className="span__item"></span>
            </div>
            <button>
                <img src="/imgs/botaoAdd2.png" className="btnAdd2" alt="botao2"/>
            </button>
        </div>
    )
}