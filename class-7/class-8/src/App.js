import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='productos' element={<Products/>}/>
          <Route path='detalle/:name' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
