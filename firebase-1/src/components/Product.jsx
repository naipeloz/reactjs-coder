import { getFirestore, } from 'firebase/firestore';
import { useEffect } from 'react';

const Product = () => {
  useEffect(() => {
    const db = getFirestore();
      
  }, []);

  return (
    <h3>Acá va a ir la product list</h3>
  )
}

export default Product;
