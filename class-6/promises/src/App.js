import { useState } from 'react';
import Producto from './componentes/Producto';

function App() {
  const productos = [{
    name: 'Balon'
  }, {
    name: 'Bicicleta'
  }, {
    name: 'Power Ranger'
  }];

  const renderProductos = () => {
    const componentesProducto = productos.map((item) => (
      <Producto name={item.name}/>
    ))
    console.log("componentesProducto: ", componentesProducto);
    return componentesProducto;
  }

  return (
    <div className="App">
      <h1>Ejemplo After Class map</h1>
      {renderProductos()}
    </div>
  );
}

export default App;
