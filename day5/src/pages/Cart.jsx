import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { Link } from 'react-router-dom';
import { Box, Image, Button } from '@chakra-ui/react'; // Import Chakra UI components
import Footer from '../Components/Footer';

const Cart = () => {
  const { cartItems, incrementItem, decrementItem, deleteItem } = useContext(AuthContext);

  return (
    <Box
    mt="50px"
    >
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="20px"
      
      
      >
        {cartItems.map((item) => (
          <Box key={item.id} 
           padding="10px"
          borderRadius="md"
          p="25px"
          width="100%"
          maxWidth="300px"
          margin="auto"
          boxShadow="md"
          
          
          >
            <Image src={item.image_url} alt="name" height="200px" objectFit="cover" margin="auto" />
            <p>{item.price}</p>

            
            <Button mt="10px"  bgColor="#333333" color="white" colorScheme='red'   size="sm" onClick={() => incrementItem(item) }>+</Button>
             {item.quantity}
            <Button  ml="5px" mt="10px" bgColor="#333333" color="white" colorScheme='red'   size="sm"  onClick={() => decrementItem(item)} disabled={item.quantity === 1}>
              -
            </Button>
            <Button  ml="8px" mt="10px"  bgColor="#333333" color="white" colorScheme='red'  size="sm" onClick={() => deleteItem(item)}>Delete</Button>

            <p>Total: ${item.price * item.quantity}</p>
          </Box>
        ))}
      </Box>

      <Box>
        {cartItems.length > 0 ? (
          <Link to="/payment">
            <Button mt="30px" bgColor="#333333" color="white" colorScheme='red'>Proceed to Payment</Button>
          </Link>
        ) : (
          <p>Your cart is empty. Please add items to proceed with payment.</p>
        )}
      </Box>

      
    <Box mt="40px">
      <Footer/>
      </Box>
      <br/>
    </Box>
  );
};

export default Cart;
