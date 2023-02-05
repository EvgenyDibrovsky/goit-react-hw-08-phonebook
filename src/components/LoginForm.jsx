import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { FormBtnSignIn } from './Buttons';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const LoginForm = () => {
  const bgColor = useColorModeValue('gray.200', 'transparent');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Flex align={'center'} justify={'center'} bg={bgColor}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={5}
      >
        <Flex
          align={'center'}
          justify={'center'}
          as={'form'}
          flexDirection={'column'}
          onSubmit={handleSubmit}
        >
          <Flex flexDirection={'column'} align={'center'}>
            <FormControl isRequired>
              <FormLabel> Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                id="id"
                placeholder="Email address"
                mb={5}
                onChange={handleChange}
              />
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  value={password}
                  type={show ? 'text' : 'password'}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <InputRightElement>
                  <Button
                    h="1.55rem"
                    bg={'transparent'}
                    mr={'5px'}
                    size="lg"
                    onClick={handleClick}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Flex>
          <FormBtnSignIn />
        </Flex>
      </Box>
    </Flex>
  );
};
