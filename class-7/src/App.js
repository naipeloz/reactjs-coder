import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((response) => response.json())
      .then((response) => {
        console.log('response:', response)
        setPokemon(response)
      })
      .catch((error) => {
        console.error("Error al consultar la API: ", error);
      })
  }, [])

  const renderAbilities = () => {
    return pokemon?.abilities?.map((item) => (
      <p>{item.ability.name}</p>
    ))
  }

  return (
    <div className="App">
      <h1>Fetch</h1>
      <h2>{pokemon?.name}</h2>
      {renderAbilities()}
    </div>
  );
}

export default App;
