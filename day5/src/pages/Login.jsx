import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';
import { Box, Input, Button, FormControl, FormLabel } from '@chakra-ui/react'; // Import Chakra UI components

export default function Login() {
  const { isLoggedIn, login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here, for simplicity we'll just check for a hardcoded username and password
    if (username === 'sandip' && password === '6900') {
      login();
    } else {
      alert('Invalid credentials!');
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      bgGradient="white"
    >
      <Box
        p="20px"
        maxW="400px"
        w="100%"
        mx="auto"
        bg="white"
        borderRadius="md"
        boxShadow="md"
      >
        <form className="auth_form" onSubmit={handleLogin}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              size="md"
              type="text"
              placeholder="Enter Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              marginBottom="10px"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              size="md"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              marginBottom="10px"
            />
          </FormControl>
          <Button bgColor="#333333" color="white" colorScheme='red' size="md" type="submit" width="full">
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}
