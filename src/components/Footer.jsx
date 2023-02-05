import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      target="_blank"
      rounded={'full'}
      w={6}
      h={6}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      width="100%"
      position="fixed"
      bottom="0"
      as="footer"
      bg={useColorModeValue('gray.100', 'blackAlpha.300')}
      color={useColorModeValue('linkedin.900', 'white')}
    >
      <Container
        className="footerContainer"
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text fontSize={'l'} as="b">
          2023 Evgeny Dibrovsky
        </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/jewgienij-dibrowski/'}
          >
            <FaLinkedin size={30} />
          </SocialButton>
          <SocialButton
            label={'Github'}
            href={'https://github.com/EvgenyDibrovsky'}
          >
            <FaGithub size={30} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
