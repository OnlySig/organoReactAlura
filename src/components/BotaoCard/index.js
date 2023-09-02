import "./BotaoCard.css"

export const BotaoCard = (props) => {
    return (
        <div className="container__botao">
            <button className="btn">{props.children}</button>
        </div>
    )
}