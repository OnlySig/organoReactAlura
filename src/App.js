import { useState } from 'react';
import { Banner } from './components/Banner';
import { CampoForm } from './components/CampoForm';
import { Time } from "./components/Time";
import { FormVazio } from './components/FormVazio';
import { Footer } from './components/Footer';

function App() {

  const times = [
    {
      nome: ""
    },
    {
      nome: "Romance",
      corPrimaria: "#E06B69",
      corSecundaria: "rgba(0, 0, 0, 0.10)"
    }, 
    {
      nome: "Drama",
      corPrimaria: "#FFBA05",
      corSecundaria: "rgba(0, 0, 0, 0.10)"
    },
    {
      nome: "Conto",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Poesia",
      corPrimaria: "#000000",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: "Ficção",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Épicos",
      corPrimaria: "#E06B69",
      corSecundaria: "rgba(0, 0, 0, 0.10)"
    },
    {
      nome: "Terror",
      corPrimaria: "#000000",
      corSecundaria: "#FDE7E8"
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const novoColaboradorAdd = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
      <>
        <Banner />
        <CampoForm times={times.map(time => time.nome)} cadastrado={colaborador => novoColaboradorAdd(colaborador)}/>
        {colaboradores.length === 0 ? <FormVazio /> : times.map(time => <Time 
          key={time.nome} 
          nomeTime={time.nome}
          Livro={colaboradores.map(colaborador => colaborador.livro)}
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
        <Footer/>
      </>
  );
}

export default App;