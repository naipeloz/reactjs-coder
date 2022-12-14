import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ComponenteC from "./ComponenteC";

function ComponenteB() {
  const isDarkMode = useContext(ThemeContext)
  return (
    <div className="App">
      <h1>Componente B {isDarkMode ? 'Es dark' : 'Es light'}</h1>
      <ComponenteC />
    </div>
  );
}

export default ComponenteB;
