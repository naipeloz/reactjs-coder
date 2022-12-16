import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import Loader from "./Loader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const data = useContext(CartContext);
 
  useEffect(() => {
    fetch('https://638fa3d09cbdb0dbe32d7634.mockapi.io/catalogo/catalogo')
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  useEffect(() => {
    alert("Se agrego un producto al carrito");
    console.log(data);
  }, [data.cart])

  useEffect(() => {
    renderQuery()
  }, [query])

  const renderProducts = () => {
    return (
      products.map((product) => (
        <div>
          <h1>{product.name}</h1>
          <h2>${product.price}</h2>
          <img src={product.img}/>
          <p>{product.description}</p>
          <button onClick={() => {data.addToCart(product)}}>Agregar al carrito</button>
        </div>
      ))
    )
  }
  const renderQuery= () => {
    console.log('buscando')
    const resultados =  products.filter((product) => product.name.includes(query))
    console.log('resultados:', resultados)
    return(
      resultados
    )  
  }

  return (
    <>
      <input type="text" onChange={(evt) => setQuery(evt.target.value)} value={query}/>
      { products.length === 0 ? <Loader/> : renderProducts() }
    </>
  )

}

export default ProductList;
