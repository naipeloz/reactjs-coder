const Boton = ({nombre, handleOnClick}) => {
  return(
    <button style={{ backgroundColor: '#eee'}} onClick={handleOnClick}>
      {nombre}
    </button>
  )
}

export default Boton;
