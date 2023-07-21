import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import {Navigate} from "react-router-dom";

export default function Login() {
    const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here, for simplicity we'll just check for a hardcoded username and password
    if (username === 'sandip' && password === '6900') {
      login();
    } else {
      alert('Invalid credentials!');
    }
  };

//   const handleLogout = () => {
//     logout();
//   };

 
         
  if(isLoggedIn){
    return  <Navigate to="/" />
}

  return (
    <div>
      <form className="auth_form" onSubmit={handleLogin}>
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          type="text"
          className="email"
          placeholder="Enter Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          type="password"
          className="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input className="submit" type="submit" value="login" />
      </form>
    </div>
  );
}