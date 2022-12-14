import { useState } from "react";
import Context from "./Context"

const Provider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logoutHandler = () => {
    console.log("cierra sesion al usuario")
    setLoggedIn(false);
  }

  const loginHandler = (email, password) => {
    if (email === 'j@j.com' && password === 'abc123'){
      setLoggedIn(true);
    } else {
      console.log("Clave incorrecta")
    }
  }

  return (
    <Context.Provider value={{
      isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
    }}>
      {children}
    </Context.Provider>
  )
}

export default Provider;
