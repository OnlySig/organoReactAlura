/* eslint-disable no-unused-expressions */
import "./CampoForm.css"
import { CampoTexto } from "../CampoTexto"
import { ListaSuspensa } from "../ListaSuspensa"
import { BotaoCard } from "../BotaoCard"
import { useState } from "react"
import { HeaderCard } from "../HeaderCard"

export const CampoForm = (props) => {    
    const [nome, setNome] = useState('');
    const [livro, setLivro] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const submitar = e => {
        e.preventDefault()
        props.cadastrado({
            nome,
            livro,
            cargo,
            imagem,
            time
        });
        setNome("")
        setLivro("")
        setCargo("")
        setImagem("")
        setTime("")
    }
    
    return (
        <>
            <div className="formulario">
                <form onSubmit={submitar} className="formularioContent">
                    <h1 className="title">Preencha os dados para criar o card do autor.</h1>
                    <div className="infoForms">
                        <CampoTexto id="nome" alterarElement={valor => setNome(valor)} valor={nome} obrigatorio={true} tipo="text" label="Nome" placeholder="nome do autor"/>
                        <CampoTexto id="livro" alterarElement={valor => setLivro(valor)} valor={livro} obrigatorio={true} tipo="text" label="Livro" placeholder="nome do livro"/>
                        <CampoTexto id="stars" alterarElement={valor => setCargo(valor)} valor={cargo} obrigatorio={true} tipo="number" label="Stars" placeholder="stars"/>
                        <CampoTexto id="imagem" alterarElement={valor => setImagem(valor)} valor={imagem} obrigatorio={true} tipo="text" label="Imagem" placeholder="imagem"/>
                        <ListaSuspensa id="categoria" alterarElement={valor => setTime(valor)} valor={time} obrigatorio={true} label="Categoria" itens={props.times}/>
                        <BotaoCard>
                            Criar card
                        </BotaoCard>
                    </div>
                </form>
            </div>
            <div>
                <HeaderCard titleHeader="Minha Lista de Autores:" />
            </div>
        </>
    )
}