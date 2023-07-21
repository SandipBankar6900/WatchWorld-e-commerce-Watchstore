import { createContext , useState} from "react";

export const AuthContext =  createContext();


function AuthContextProvider ({children}){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    alert("login")
  };

  const logout = () => {
    setIsLoggedIn(false);
  };   

    return(
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;