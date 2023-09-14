/* eslint-disable no-unused-expressions */
import "./CampoForm.css"
import { CampoTexto } from "../CampoTexto"
import { ListaSuspensa } from "../ListaSuspensa"
import { BotaoCard } from "../BotaoCard"
import { useState } from "react"

export const CampoForm = (props) => {    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    
    const submitar = e => {
        e.preventDefault()
        props.cadastrado({
            nome,
            cargo,
            imagem,
            time
        });
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }
    

    return (
        <>
            <div className="formulario">
                <form onSubmit={submitar} className="formularioContent">
                    <h1 className="title">Preencha os dados para criar o card do colaborador.</h1>
                    <div className="infoForms">
                        <CampoTexto alterarElement={valor => setNome(valor)} valor={nome} obrigatorio = {true} label="Nome" placeholder="nome"/>
                        <CampoTexto alterarElement={valor => setCargo(valor)} valor={cargo} obrigatorio = {true} label="Cargo" placeholder="cargo"/>
                        <CampoTexto alterarElement={valor => setImagem(valor)} valor={imagem} obrigatorio = {true} label="Imagem" placeholder="imagem"/>
                        <ListaSuspensa alterarElement={valor => setTime(valor)} valor={time} obrigatorio = {true} label="Time" itens={props.times}/>
                        <BotaoCard>
                            Criar card
                        </BotaoCard>
                    </div>
                </form>
            </div>
        </>
    )
}