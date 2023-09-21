import "./Time.css"
import { Colaborador } from "../Colaborador"

export const Time = (props) => {

    return (
        props.colaboradores.length > 0 ?
        <section className="time" style={{backgroundColor: props.corSecundaria}}>
                <h3>{props.nomeTime}</h3>
                <span className="row" style={{backgroundColor: props.corPrimaria}}></span>
                <div className="colab__container">
                    {props.colaboradores.map(colaborador => <Colaborador 
                        key={colaborador.nome}
                        nomeColab={colaborador.nome} 
                        Livro={colaborador.livro}
                        cargoColab={colaborador.cargo} 
                        imgColab={colaborador.imagem} 
                        timeColab={colaborador.time}
                        bgup={props.corPrimaria}
                    />)}
                </div>
        </section>
        : ""
    )
}