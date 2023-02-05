import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { FormBtnSignUp } from './Buttons';
import { Box } from '@chakra-ui/layout';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const bgColor = useColorModeValue('gray.200', 'transparent');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = e => {
    e.preventDefault();
    const passwordConfirm = e.target.elements.repeatPassword.value;
    if (password !== passwordConfirm) {
      toast({
        position: 'top-right',
        description: 'Those passwords did not match. Try again',
        status: 'warning',
      });
      return;
    }

    dispatch(register({ name, email, password }));

    e.target.reset();
    reset();
  };

  const reset = () => {
    setName('');
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
              <FormLabel>Name</FormLabel>

              <Input
                type="text"
                name="name"
                value={name}
                id="id"
                placeholder="Jan Kowalski"
                onChange={handleChange}
                mb={5}
              />

              <FormLabel>Email</FormLabel>

              <Input
                type="email"
                name="email"
                value={email}
                placeholder="email@gmail.com"
                onChange={handleChange}
                mb={5}
              />

              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Qwerty123!"
                mb={5}
              />

              <FormLabel>Password</FormLabel>

              <Input
                type="password"
                name="repeatPassword"
                onChange={handleChange}
                placeholder="Qwerty123!"
              />
            </FormControl>
          </Flex>
          <FormBtnSignUp />
        </Flex>
      </Box>
    </Flex>
  );
};
