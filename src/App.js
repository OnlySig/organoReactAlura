import { useState } from 'react';
import { Banner } from './components/Banner';
import { CampoForm } from './components/CampoForm';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const novoColaboradorAdd = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
      <>
        <Banner />
        <CampoForm cadastrado={colaborador => novoColaboradorAdd(colaborador)}/>
      </>
  );
}

export default App;
