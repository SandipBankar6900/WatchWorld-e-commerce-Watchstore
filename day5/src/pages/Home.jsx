import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { FaShippingFast, FaUndo, FaMedal, FaPen } from 'react-icons/fa';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <Box>
      <Image src="https://cdn.webshopapp.com/shops/255731/files/433265638/1600x601x1/image.jpg" alt="name" />

      <Box
        display="flex"
        justifyContent="space-around"
        marginTop="40px"
      >
        <Image src="https://cdn.webshopapp.com/shops/255731/themes/140444/v/1909531/assets/index-banner-1-1-background.jpg?20230606230440" alt="name" width="30%" />

        <Image src="https://cdn.webshopapp.com/shops/255731/themes/140444/v/1910744/assets/index-banner-1-2-background.jpg?20230616093608" alt="name" width="30%" />
      </Box>

      <Box marginTop="50px" p={4} textAlign="center" maxWidth="800px" mx="auto">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          You can never go wrong with the bestselling wooden watches for men from WoodWatch, as a gift or just for yourself. All our men's watches are made of natural, sustainable wood, each with its own texture, color, and pattern. All our watches for men can be personalized with an engraving on the backplate.
        </Text>
        <Button colorScheme="teal" size="lg">
          EXPLORE
        </Button>
      </Box>

      <Box marginTop="80px" display="flex" justifyContent="space-around" alignItems="center">
        <Box textAlign="center" p={4}>
          <FaShippingFast size={32} style={{ marginBottom: '10px' }} />
          <Text fontWeight="bold">FREE SHIPPING & RETURNS</Text>
          <Text fontSize="sm">On all orders</Text>
        </Box>
        <Box textAlign="center" p={4}>
          <FaMedal size={32} style={{ marginBottom: '10px' }} />
          <Text fontWeight="bold">24-MONTH WARRANTY</Text>
          <Text fontSize="sm">High-quality materials</Text>
        </Box>
        <Box textAlign="center" p={4}>
          <FaPen size={32} style={{ marginBottom: '10px' }} />
          <Text fontWeight="bold">ENGRAVE YOUR WOODWATCH</Text>
          <Text fontSize="sm">Add a personal touch</Text>
        </Box>
        <Box textAlign="center" p={4}>
          <FaUndo size={32} style={{ marginBottom: '10px' }} />
          <Text fontWeight="bold">45 DAY RETURNS</Text>
          <Text fontSize="sm">Hassle-free</Text>
        </Box>
      </Box>
      <Box marginTop="50px">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
