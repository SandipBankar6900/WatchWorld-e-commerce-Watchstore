import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text, Button } from '@chakra-ui/react'; // Import Chakra UI components

const ProductCard = (props) => {
    return (
      <Box
        // borderWidth="1px"
        // borderColor="red.500"
        borderRadius="md"
        p="25px"
        width="100%"
        maxWidth="300px"
        margin="auto"
        boxShadow="md"
        mt="50px"
        
      >
        <Image src={props.image_url} alt="name" height="200px" objectFit="cover"  margin="auto"/>
  
        <Text fontWeight="bold">Brand: {props.brand}</Text>
        <Text fontWeight="bold">Brand: {props.model}</Text>
        <Text>Price: {props.price}</Text>
  
        <Button mt="10px" bgColor="#333333" color="white" colorScheme='red'  size="sm" onClick={() => props.addToCart(props)}>
          Add to Cart
        </Button>
  
        <Link to={`/products/${props.id}`}>
          <Button mt="10px"  ml="8px" bgColor="#333333" color="white" colorScheme='red'  size="sm">More Details</Button>
        </Link>
      </Box>
    );
  };
  
  export default ProductCard;
  