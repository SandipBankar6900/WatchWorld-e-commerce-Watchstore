import React from 'react';
import { Box, Text } from '@chakra-ui/react'; // Import Chakra UI components

const Successfull = () => {
    return (
        <Box  mt="100px">
      <Box
      
        textAlign="center"
        maxWidth="600px"
        width="100%"
        margin="auto"
        padding="20px"
        borderRadius="md"
        boxShadow="md"
        bgColor="#333333"
      >
        <Text fontSize="xl" fontWeight="bold" color="white">Payment Successful!</Text>
        <Text mt="10px" color="white">Thank you for your purchase.</Text>
      </Box>
      </Box>
    );
  };
  
  export default Successfull;
  