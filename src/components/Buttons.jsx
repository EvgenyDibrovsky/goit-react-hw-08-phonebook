import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';

export const HeaderBtn = ({ role, path, mlSize }) => {
  const bgColor = useColorModeValue('blue.500', 'gray.600');
  const color = useColorModeValue('white', 'white');

  return (
    <Button
      as={Link}
      to={path}
      display={'inline-flex'}
      fontSize={'lg'}
      fontWeight={600}
      color={color}
      bg={bgColor}
      _hover={{
        bg: useColorModeValue('blue.400', 'gray.500'),
        color: 'white',
      }}
      ml={mlSize}
    >
      {role}
    </Button>
  );
};

export const FormBtnSignUp = ({ role, mlSize }) => {
  const bgColor = useColorModeValue('blue.500', 'gray.600');
  const color = useColorModeValue('white', 'white');

  return (
    <Button
      w={'100%'}
      type="submit"
      loadingText="Submitting"
      size="md"
      fontSize={'md'}
      color={color}
      bg={bgColor}
      _hover={{
        bg: useColorModeValue('blue.400', 'gray.500'),
        color: 'white',
      }}
      ml={mlSize}
      mt={5}
    >
      {role}
      Sign up
    </Button>
  );
};

export const FormBtnSignIn = ({ role, mlSize }) => {
  const bgColor = useColorModeValue('blue.500', 'gray.600');
  const color = useColorModeValue('white', 'white');

  return (
    <Button
      w={'100%'}
      type="submit"
      loadingText="Submitting"
      size="md"
      fontSize={'md'}
      color={color}
      bg={bgColor}
      _hover={{
        bg: useColorModeValue('blue.400', 'gray.500'),
        color: 'white',
      }}
      ml={mlSize}
      mt={5}
    >
      {role}
      Sign in
    </Button>
  );
};

export const AuthRegBtn = ({ role, path, mlSize }) => {
  const bgColor = useColorModeValue('blue.500', 'gray.600');
  const color = useColorModeValue('white', 'white');

  return (
    <Button
      as={Link}
      to={path}
      display={'inline-flex'}
      fontSize={'lg'}
      fontWeight={600}
      color={color}
      bg={bgColor}
      _hover={{
        bg: useColorModeValue('blue.400', 'gray.500'),
        color: 'white',
      }}
      ml={mlSize}
    >
      {role}
    </Button>
  );
};

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const bgColor = useColorModeValue('blue.500', 'gray.600');
  const color = useColorModeValue('white', 'white');

  return (
    <Button
      onClick={() => dispatch(logout())}
      display={'inline-flex'}
      fontSize={'lg'}
      fontWeight={600}
      color={color}
      bg={bgColor}
      _hover={{
        bg: useColorModeValue('blue.400', 'gray.500'),
        color: 'white',
      }}
    >
      Logout
    </Button>
  );
};

export const SwitchColorModeBtn = () => {
  const bgColor = useColorModeValue('transparent', 'transparent');
  const color = useColorModeValue('orange', 'orange');
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack direction={'row'} spacing={4} ml={1}>
      <Button
        bg={bgColor}
        color={color}
        onClick={toggleColorMode}
        _hover={{
          bg: 'bgColor',
          color: 'color',
        }}
      >
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Stack>
  );
};

export const HeroSignBtn = () => {
  const bgColor = useColorModeValue('transparent', 'transparent');
  const color = useColorModeValue('blue.400', 'white');
  const Scheme = useColorModeValue('blue.400', 'white');

  return (
    <Stack spacing={6} direction={'row'}>
      <Button
        as={Link}
        to="/login"
        px={12}
        fontSize={{ base: 'lg', md: 'xl' }}
        bg={bgColor}
        color={color}
        colorScheme={Scheme}
        variant="outline"
        _hover={{
          bg: useColorModeValue('blue.400', 'gray.600'),
          color: 'white',
        }}
      >
        Login
      </Button>

      <Button
        as={Link}
        to="/register"
        px={12}
        fontSize={{ base: 'lg', md: 'xl' }}
        bg={bgColor}
        color={color}
        colorScheme={Scheme}
        variant="outline"
        _hover={{
          bg: useColorModeValue('blue.400', 'gray.600'),
          color: 'white',
        }}
      >
        Register
      </Button>
    </Stack>
  );
};

export const AddContactBtn = ({ mlSize }) => {
  const bgColor = useColorModeValue('blue.500', 'gray.600');
  const color = useColorModeValue('white', 'white');

  return (
    <Button
      type="submit"
      loadingText="Submitting"
      size="md"
      fontSize={'md'}
      color={color}
      bg={bgColor}
      _hover={{
        bg: useColorModeValue('blue.400', 'gray.500'),
        color: 'white',
      }}
      ml={mlSize}
    >
      Add contact
    </Button>
  );
};
