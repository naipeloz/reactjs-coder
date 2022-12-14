import {Link} from 'react-router-dom';

function Products () {
  return (
    <ul>
      <li><Link to='/detalle/producto1'>Producto 1</Link></li>
      <li><Link to='/detalle/producto2'>Producto 2</Link></li>
    </ul>
  )
}

export default Products;
