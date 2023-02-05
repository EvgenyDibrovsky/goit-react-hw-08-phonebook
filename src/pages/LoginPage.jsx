import { Heading, Box, Stack } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm';

const LoginPage = () => {
  return (
    <Box pt={'50px'} mx={'auto'} textAlign={'center'}>
      <Stack align={'center'}>
        <Heading fontSize={'2xl'} textAlign={'center'} mb={5}>
          Sign in to your account
        </Heading>
      </Stack>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
