import "./Colaborador.css"

// forma alternativa de usar props, dessa forma vc desestrutura a props, assim quando for usar n precisa ficar colocando "props.[elmento]" pode colocar o nome direto!!!!

export const Colaborador = ({nomeColab, Livro ,cargoColab, imgColab, bgup}) => {
    
    const cincoEstrelas = "🌟🌟🌟🌟🌟"
    const quatroEstrelas = "🌟🌟🌟🌟"
    const tresEstrelas = "🌟🌟🌟"
    const duasEstrelas = "🌟🌟"
    const umaEstrela = "🌟"

    return (
        <div className="colaborador__item">
            <div className="content__up" style={{backgroundColor: bgup}}>
                <img src={imgColab} alt="imagem da pessoa" className="imagem__colab"/>
            </div>
            <div className="content__down">
                <h4>{nomeColab}</h4>
                <h4>{Livro}</h4>
                <h5>{cargoColab === '5' ? cincoEstrelas : 'estrelas é de 0 a 5' && cargoColab === "4" ? quatroEstrelas : 'estrelas é de 0 a 5' && cargoColab === "3" ? tresEstrelas : 'estrelas é de 0 a 5' && cargoColab === "2" ? duasEstrelas : 'estrelas é de 0 a 5' && cargoColab === "1" ? umaEstrela : 'estrelas é de 0 a 5'}</h5>
            </div>
        </div>
    )
}