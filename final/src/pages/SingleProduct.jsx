import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import { Box, Image, Text, Button } from '@chakra-ui/react'; // Import Chakra UI components
import Footer from '../Components/Footer';
import axios from 'axios';


const SingleProduct = () => {
  const { addToCart } = useContext(AuthContext);
  const { id } = useParams();

  const [data, setData] = useState({});

  const fetchData = (id) => {
    axios.get(`http://localhost:3000/watches/${id}`).then((response) => setData(response.data));
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <Box>
    <Box
    // borderWidth="1px"
    // borderColor="red.500"
    borderRadius="md"
    p="20px"
    width="100%"
    maxWidth="300px"
    margin="auto"
    boxShadow="md"
    mt="50px"
    
    >
      

      <Image src={data.image_url} alt="name" height="200px" objectFit="cover"  margin="auto" />

      <Text fontWeight="bold">Brand: {data.brand}</Text>
      <Text fontWeight="bold">Model: {data.model}</Text>
      <Text>movement: {data.movement}</Text>
      <Text>case_material: {data.case_material}</Text>
      <Text>water_resistance: {data.water_resistance}</Text>
      <Text>dial_color: {data.dial_color}</Text>
    
      <Text>Price: {data.price}</Text>

      <Link to={`/singleproduct/${id}`}>
        <Button mt="10px" bgColor="#333333" color="white" colorScheme='red' onClick={() => addToCart(data)}>
          Add To Cart
        </Button>
      </Link>
    </Box>

    
    <Box >
      <Footer/>
      </Box>
      <br/>


    </Box>
  );
};

export default SingleProduct;
