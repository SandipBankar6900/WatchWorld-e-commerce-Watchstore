import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      
      <Link to="/">Home</Link>
      <Link to="/products">Watches</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
     
      <Link to="/payment">Payment</Link>
      <Link to="/login">Login</Link>
     
     
    </div>
  )
}

export { Navbar };