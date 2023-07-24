import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { Link } from 'react-router-dom';
import { Box, Text, Input, Button } from '@chakra-ui/react'; // Import Chakra UI components
import Footer from '../Components/Footer';

const Payment = () => {
    const { cartItems } = useContext(AuthContext);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [formData, setFormData] = useState({
      cardNumber: '',
      cardExpiry: '',
      cardCVV: '',
      cardholderName: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handlePaymentSubmit = (e) => {
      e.preventDefault();
      setTimeout(() => {
        setPaymentSuccess(true);
      }, 2000);
    };
  
    // Calculate the total amount to be paid
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <Box mt="50px" textAlign="center">

       <Text mt="20px" fontWeight="bold">Total Amount: ${totalAmount}</Text>
       
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="20px" mt="20px">
          {cartItems.map((item) => (
            <Box key={item.id} padding="10px" borderRadius="md" p="25px" width="100%" maxWidth="300px" margin="auto" boxShadow="md">
              <Text fontWeight="bold">Brand: {item.brand}</Text>
              <Text>Model: {item.model}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </Box>
          ))}
        </Box>
       
        {/* Payment form */}
        
        <Box mt="40px">
        {cartItems.length > 0 ? (
          <Box mt="50px"  textAlign="center" maxWidth="400px" margin="auto">
            <Text fontSize="xl" fontWeight="bold">Payment Details</Text>
            <form onSubmit={handlePaymentSubmit}>
              <label>
                Card Number:
                <Input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                />
              </label>
              <br />
              <label>
                Expiry Date:
                <Input
                  type="text"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                />
              </label>
              <br />
              <label>
                CVV:
                <Input
                  type="text"
                  name="cardCVV"
                  value={formData.cardCVV}
                  onChange={handleInputChange}
                  placeholder="123"
                />
              </label>
              <br />
              <label>
                Cardholder Name:
                <Input
                  type="text"
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                />
              </label>
              <br />
              <Link to="/successfull">
                <Button type="submit" mt="10px" bgColor="#333333" color="white" colorScheme='red'>
                  Pay Now
                </Button>
              </Link>
            </form>
          </Box>
        ) : (
          <Text mt="20px">Your cart is empty. Please add items to proceed with payment.</Text>
        )}
         
         </Box>


         
    <Box mt="40px" >
      <Footer/>
      </Box>
      <br/>
      </Box>
      
    );
  };
  
  export default Payment;
  