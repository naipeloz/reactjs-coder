import { useState } from "react";

function Contador () {
  const [bandera, setBandera] = useState(true);

  const cambiarEstado = () => {
    setBandera(!bandera);
  }

  return (
    <div>
      {bandera ? <h1>Presionado</h1> : <h1>NO presionado</h1>}
      <button onClick={cambiarEstado}>Cambiar</button>
    </div>

  )
}

export default Contador;
