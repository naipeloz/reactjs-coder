function Contenedor (props) {
  return (
    <div>
      <p>{props.title}</p>
      {props.children}
      {props.textoComponente({ texto: 'hola desde una prop que es un componente'})}
    </div>
  )
}

export default Contenedor;
