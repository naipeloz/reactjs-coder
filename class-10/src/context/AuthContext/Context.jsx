import { createContext } from "react";

const Context = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {}
});

export default Context;
