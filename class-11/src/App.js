import {useEffect, useState} from 'react';
import Loader from './componentes/Loader';
import List from './componentes/List';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [otra] = useState(false);
  const [flag, setFlag] = useState('l');
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((response) => response.json())
      .then((response) => {
        console.log('response:', response)
        setPokemon(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  }, []);

  const renderPokemon = () => {
    if (loading) {
      return <Loader/>
    }
    return <List data={pokemon} />
  }

  const renderSwitch = () => {
    switch(flag) {
      case 'perro':
        return <h1>Soy un perro</h1>
      case 'gato':
        return <h1>Soy un Gato</h1>
      case 'loro':
        return <h1>Soy un Loro</h1>
      default:
        return <h1>Falta el criterio</h1>
    }
  }

  return (
    <>
      {/* {loading ? <Loader/> : <List data={pokemon}/>} */}
      {/* { renderSwitch() } */}
      { otra && <Loader />}
      { otra || <List data={pokemon} />}
    </>
      
      // { renderPokemon() }
  );
}

export default App;
