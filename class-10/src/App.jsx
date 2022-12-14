
import Provider from './context/AuthContext/Provider';
import './App.css';
import Login from './componentes/Login';
import { useContext } from 'react';
import Context from './context/AuthContext/Context';

function App() {
  return (
    <Provider>
      <Login />
    </Provider>
  );
}

export default App;
