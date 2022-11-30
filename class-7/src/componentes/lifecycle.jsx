import { useEffect, useState } from 'react';
import './App.css';

function Lifecycle() {
  const [test, setTest] = useState('');
  
  useEffect(() => {
    console.log("Se monto el componente")
  }, [])
  
  useEffect(() => {
    console.log("Test cambió a ", test);
  } , [test]);

  useEffect(() => {
    return () => {
      setTest('')
    }
  }, [])

  return (
    <div className="App">
      <h1> Ciclos de vida</h1>
      <button onClick={() => setTest('Hola')}>
        Cambiar
      </button>
    </div>
  );
}

export default Lifecycle;
