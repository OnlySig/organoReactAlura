import "./CampoForm.css"
import { CampoTexto } from "../CampoTexto"

export const CampoForm = () => {
    return (
        <>
            <div className="formulario">
                <form className="formularioContent">
                    <h1 className="title">Preencha os dados para criar o card do colaborador.</h1>
                    <div className="infoForms">
                        <CampoTexto label="Nome" placeholder="nome"/>
                        <CampoTexto label="Cargo" placeholder="cargo"/>
                        <CampoTexto label="Imagem" placeholder="digite o endereço da imagem"/>
                        <CampoTexto label="Time" placeholder=""/>
                    </div>
                </form>
            </div>
        </>
    )
}