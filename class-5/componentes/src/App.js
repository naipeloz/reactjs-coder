import logo from './logo.svg';
import Contenedor from './componentes/Contenedor';
import Header from './componentes/Header';
import Paragraph from './componentes/Paragraph';
import Contador from './componentes/Contador';
import './App.css';

function App() {
  return (
    // <Contenedor 
    //   title="Soy el titulo"
    //   textoComponente={Paragraph}
    // >
    //   <p>estoy probando a enviarle más cosas en el children</p>
    //   <Header/>
    // </Contenedor>
    <Contador/>
  );
}

export default App;
