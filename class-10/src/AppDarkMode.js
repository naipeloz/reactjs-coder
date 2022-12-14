
import { useState } from 'react';
import './App.css';
import ComponenteA from './componentes/ComponenteA';
import ComponenteB from './componentes/ComponenteB';
import ThemeContext from './context/ThemeContext';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div className="App">
        <h1>{isDarkMode ? 'Es dark' : 'Es light'}</h1>
        <button onClick={() => setDarkMode(!isDarkMode)}>
          cambiar
        </button>

        <ComponenteA />
        <ComponenteB />

      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
