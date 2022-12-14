import {
  Link
} from 'react-router-dom';
function Navbar() {
  return(
    <ul>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/productos'>
        <li>Productos</li>
      </Link>
    </ul>
  )
}

export default Navbar;
