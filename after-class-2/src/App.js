import { useContext } from 'react';
import CartProvider from './context/CartProvider';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Componente principal</h1>
        <ProductList/>
      </div>  
    </CartProvider>
    
  );
}

export default App;
