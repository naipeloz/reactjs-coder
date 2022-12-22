import ProductList from './components/ProductList';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import Category from './components/Category';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route 
            path='/'
            element={<ProductList/>}
          />
          <Route 
            path='/product/:id'
            element={<Product/>}
          />
          <Route 
            path='/category/:id'
            element={<Category/>}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
