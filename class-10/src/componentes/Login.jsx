import { useContext, useState } from "react";
import Context from "../context/AuthContext/Context";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authData = useContext(Context);

  const onSubmit = (evt) => {
    evt.preventDefault();
    authData.onLogin(email, password);
  }

  return (
    authData.isLoggedIn ? <button onClick={authData.onLogout}>Cerrar Sesion</button> : (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        onChange={(evt) => setEmail(evt.target.value)}
        placeholder="email"
        value={email}
      />
      <input 
        type="password"
        onChange={(evt) => setPassword(evt.target.value)}
        placeholder="password"
        value={password}
      />
      <button type="submit">Login</button>
    </form>)
  );
}

export default Login;
