import "./Colaborador.css"

// forma alternativa de usar props, dessa forma vc desestrutura a props, assim quando for usar n precisa ficar colocando "props.[elmento]" pode colocar o nome direto!!!!

export const Colaborador = ({nomeColab, cargoColab, imgColab, bgup}) => {
    return (
        <div className="colaborador__item">
            <div className="content__up" style={{backgroundColor: bgup}}>
                <img src={imgColab} alt="imagem da pessoa" className="imagem__colab"/>
            </div>
            <div className="content__down">
                <h4>{nomeColab}</h4>
                <h5>{cargoColab}</h5>
            </div>
        </div>
    )
}