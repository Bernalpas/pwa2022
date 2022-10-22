import './App.css';
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Main from './componentes/Main';
import Botones from './componentes/Botones';
import Navbar from './componentes/Navbar';

function App() {

  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(res => setCharacters(res.results))
  }, [])

  const handleImprimir = () => {
    console.log(characters);
  }

  return (
    <div className="App">
      <Navbar />
      <Botones />
      <div>
        <Button onClick={handleImprimir} variant="danger m-2 w-50">Imprimir en Consola - Eventos</Button>
      </div>
      <Main characters={characters} />
    </div>
  );


}

export default App;
