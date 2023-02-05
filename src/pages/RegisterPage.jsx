import { Box, Heading, Stack } from '@chakra-ui/layout';
import { RegisterForm } from 'components/RegisterForm';

const RegisterPage = () => {
  return (
    <Box
      pt={'50px'}
      mx={'auto'}
      textAlign={'center'}
    >
      <Stack align={'center'}>
        <Heading fontSize={'2xl'} textAlign={'center'} mb={5}>
          Registration
        </Heading>
      </Stack>
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
