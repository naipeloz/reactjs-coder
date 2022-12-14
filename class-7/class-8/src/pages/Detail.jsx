import { useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';

function Detail () {
  const { name } = useParams();
  useEffect(() => {
    // Busco en la DB
    console.log("Cambio la URL")
  }, [name]);
  return (
    <>
    <h1>Detalle producto {name}</h1>
    </>
  )
}

export default Detail;
