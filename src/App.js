import { useState } from 'react';
import { Banner } from './components/Banner';
import { CampoForm } from './components/CampoForm';
import { Time } from './components/Time';

function App() {

  const times = [
    {
      nome: ""
    },
    {
      nome: "Vasco",
      corPrimaria: "#E06B69",
      corSecundaria: "rgba(0, 0, 0, 0.10)"
    }, 
    {
      nome: "Santos",
      corPrimaria: "#FFBA05",
      corSecundaria: "rgba(0, 0, 0, 0.10)"
    },
    {
      nome: "Gremio",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Colorado",
      corPrimaria: "#000000",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: "Palmeiras",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Corinthians",
      corPrimaria: "#E06B69",
      corSecundaria: "rgba(0, 0, 0, 0.10)"
    },
    {
      nome: "Flamengo",
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
        {times.map(time => <Time 
          key={time.nome} 
          nomeTime={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
      </>
  );
}

export default App;