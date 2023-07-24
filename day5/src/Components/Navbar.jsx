import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import image from "../images/Watchworld.png";

function Navbar() {
  return (
    <Box pos="sticky" top="0" zIndex="999" bg="white" boxShadow="md" h="78px">
      <Flex
        as="nav"
        align="center"
        justify="space-around"
        color="black"
        p="1rem"
      >
        <Link to="/">
          <Image src={image} alt="Logo" h="35px" />
        </Link>
        <ChakraLink
          as={Link}
          to="/products"
          p="1rem"
          _hover={{ textDecoration: "underline" }}
        >
          <Text fontWeight="bold">watches</Text>
        </ChakraLink>
        <ChakraLink
          as={Link}
          to="/about"
          p="1rem"
          _hover={{ textDecoration: "underline" }}
        >
          <Text fontWeight="bold">About</Text>
        </ChakraLink>
        <ChakraLink
          as={Link}
          to="/cart"
          p="1rem"
          _hover={{ textDecoration: "underline" }}
        >
          <img
            src="https://previews.123rf.com/images/ricochet64/ricochet641902/ricochet64190200045/117724913-shopping-cart-symbol-illustration.jpg"
            alt="cart"
            width="35px"
          />
        </ChakraLink>
        <ChakraLink
          as={Link}
          to="/login"
          p="1rem"
          _hover={{ textDecoration: "underline" }}
        >
          <img
            src="https://icon-library.com/images/login-icon/login-icon-2.jpg"
            alt="login"
            width="30px"
          />
        </ChakraLink>
      </Flex>
    </Box>
  );
}

export { Navbar };
