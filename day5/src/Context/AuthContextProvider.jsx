import { createContext , useState} from "react";

export const AuthContext =  createContext();


function AuthContextProvider (props){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartItems, setCartItems] = useState([]);

  const login = () => {
    setIsLoggedIn(true);
    alert("login")
  };

  const logout = () => {
    setIsLoggedIn(false);
  };   

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const incrementItem = (item) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const decrementItem = (item) => {
  
    
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
    
  };

  
  const deleteItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };



    return(
        <AuthContext.Provider value={{ isLoggedIn, login, logout,addToCart,incrementItem,decrementItem,cartItems,deleteItem,clearCart }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;