import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ComponenteC() {
  const isDarkMode = useContext(ThemeContext)
  return (
    <div className="App">
      <h1>Componente C {isDarkMode ? 'Es dark' : 'Es light'}</h1>
    </div>
  );
}

export default ComponenteC;
