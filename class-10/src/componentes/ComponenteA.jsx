import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ComponenteA() {
  return (
    <ThemeContext.Consumer>
      {({ isDarkMode }) => (
        <div className="App">
          <h1>Componente A {isDarkMode ? 'Es dark' : 'Es light'}</h1>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default ComponenteA;
