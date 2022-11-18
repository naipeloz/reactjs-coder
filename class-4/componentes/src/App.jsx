// Importar React para tener todas las funcionalidades del framework (opcional)
import React from 'react';
import SaludadorCumpleanos from './components/SaludadorCumpleanos';
import Boton from './components/Boton';
import Title from './components/Title';
import Modal from './components/Modal';

// Crear mi componente funcional que se llama App
// const App = () => {
//   const nombre = 'Julian';
//   const saludo = `Hola ${nombre}`
//   return (
//     <div>
//       <h1>Mi primer componente en React, mi nombre es { saludo }</h1>
//     </div>
//   )
// }

function App () {
  const nombre = 'Julian';
  return (
    <>
      <Modal
        title="Mi primer modal 111"
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique pariatur fugit repudiandae iure odio sed rem praesentium, laudantium maiores, ducimus voluptatum sapiente quibusdam nostrum sint hic beatae autem possimus?</p>
        <h1>Otro titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nulla consectetur sit dolor numquam. Ad est esse, ipsam iste consequatur similique nam cumque nesciunt, debitis perspiciatis, nihil dolores quam sint.</p>
      </Modal>
      <h1>test</h1>
    </>
    // <div>
    //   <h1>Mi primer componente en React, mi nombre es { nombre }</h1>
    //   <div>
    //     <Title 
    //       color="blue"
    //       nombre="Maria"
    //     />
    //     <Boton
    //       nombre="Presione acá por favor"
    //       handleOnClick={() => {console.log("Boton presionado")}}
    //     />
    //   </div>
    //   <SaludadorCumpleanos 
    //     nombre="Pool"
    //     edad={29}
    //   />
    //   <SaludadorCumpleanos 
    //     nombre={nombre}
    //     edad={32}
    //   />
    //   <Boton
    //     nombre="Salida"
    //     handleOnClick={() => {console.log("Salio el usuario")}}
    //   />
    // </div>
  )
}

// Exportando el componente para que pueda ser usado por otros components
export default App;
