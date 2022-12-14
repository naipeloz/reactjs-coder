// const Producto = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>Stock {props.stock}</h2>
//       <p>{props.description}</p>
//     </div>
//   )
// };

const Producto = ({name}) => {
  return (
    <div>
      <h1>SOY EL COMPONENTE PRODUCTO</h1>
      <h2>{name}</h2>
    </div>
  )
};

export default Producto;
