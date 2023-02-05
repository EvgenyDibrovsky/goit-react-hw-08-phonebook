import { useSelector } from 'react-redux';
import { selectToken } from '../redux/auth/auth-selectors';
import { Navigation } from './Navigation';
import { UserAuthMenu } from './UserAuthMenu';
import { AuthNav } from './AuthNav';
import { SwitchColorModeBtn } from './Buttons';
import { Box, Container, Flex } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';

export const Header = () => {
  const token = useSelector(selectToken);
  return (
    <Box
      as="header"
      bg={useColorModeValue('gray.100', 'blackAlpha.100')}
      px={4}
    >
      <Container maxW={'6xl'} py={4}>
        <Flex
          name="InsideHeaderBox"
          h={6}
          justify={{ base: 'space-evenly', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Navigation />
          <Flex alignItems={'center'}>
            {token ? <UserAuthMenu /> : <AuthNav />}
            <SwitchColorModeBtn />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
