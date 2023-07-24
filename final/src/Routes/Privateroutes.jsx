import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

function Privateroutes({children}) {
  const {isLoggedIn } = useContext(AuthContext);
//   console.log(isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default Privateroutes;