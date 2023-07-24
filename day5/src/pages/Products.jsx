import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ProductCard from '../Components/ProductCard';
import { AuthContext } from '../Context/AuthContextProvider';
import { Box } from '@chakra-ui/react'; // Import Box component from Chakra UI
import Footer from '../Components/Footer';

const Products = () => {
  const [posts, setPosts] = useState([]);
  const { addToCart } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:3000/watches').then((response) => setPosts(response.data));
  }, []);

  return (
    <Box>
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="40px" p="20px"> 
      {posts.map((post) => (
        <ProductCard key={post.id} {...post} addToCart={addToCart} />
      ))}
     
    

    </Box>

    <Box >
      <Footer/>
      </Box>
      <br/>
      

    </Box>
    
  );
  
};

export default Products;
