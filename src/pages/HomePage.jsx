import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import { HeroSignBtn } from '../components/Buttons';

const HomePage = () => {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 50 }}
        py={{ base: 30, md: 28 }}
      >
        <Heading
          as={'h1'}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'100%'}
        >
          Phonebook{' '}
          <Text as={'span'} color={'blue.400'} fontSize="3xl">
            Easy Contact Management
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Welcome to our Contact Book app! Easily manage and store your contacts
          in one place. Start organizing your contacts today.
        </Text>
        <HeroSignBtn/>
      </Stack>
    </Container>
  );
};

export default HomePage;
