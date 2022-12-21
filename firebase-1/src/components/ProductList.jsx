import { collection, getDocs, getFirestore, } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsRef = collection(db, 'products');
    getDocs(productsRef)
      .then((snapshot) => {
        const productsTemp = [];
        snapshot?.docs?.forEach((item) => {
          productsTemp.push({id: item.id, ...item.data()})
        })
        setProducts(productsTemp)
      })
      .catch((error) => {
        console.log('error:', error)
      })
  }, []);

  const renderProducts = () => (
    products?.map(item => (
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    ))
  )

  return (
    <>
      <h3>Acá va a ir la product list</h3>
      {renderProducts()}
    </>
  )
}

export default ProductList;
