import React from "react";
import { Box, Text, Link, Flex, Icon, Stack } from "@chakra-ui/react";


import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" p="8" mt="10px">
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Box>
          <Text fontSize="lg">Contact Us</Text>
          <Text>Email: support@woodwatch.com</Text>
          <Text>Phone: +31 85 401 0383</Text>
        </Box>
        <Box>
          <Text fontSize="lg">Follow Us</Text>
          <Stack direction="row" spacing="4" mt="2">
            <Link href="#" target="_blank">
              <Icon as={FaFacebook} boxSize="6" />
            </Link>
            <Link href="#" target="_blank">
              <Icon as={FaInstagram} boxSize="6" />
            </Link>
            <Link href="#" target="_blank">
              <Icon as={FaTwitter} boxSize="6" />
            </Link>
            <Link href="#" target="_blank">
              <Icon as={FaEnvelope} boxSize="6" />
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontSize="lg">Men's Watches</Text>
          {/* Add links to Men's Watches categories */}
        </Box>
        <Box>
          <Text fontSize="lg">Women's Watches</Text>
          {/* Add links to Women's Watches categories */}
        </Box>
        <Box>
          <Text fontSize="lg">About WoodWatch</Text>
          {/* Add links to About WoodWatch pages */}
        </Box>
      </Flex>
      <Box mt="4" textAlign="center">
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} WoodWatch. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
