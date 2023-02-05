import { useSelector } from 'react-redux';
import { selectName } from 'redux/auth/auth-selectors';
import { Box, Text, Flex } from '@chakra-ui/react';
import { LogoutBtn } from './Buttons';
export const UserAuthMenu = () => {
  const name = useSelector(selectName);
  return (
    <Box>
      <Flex justify={'space-between'} align={'center'}>
        <Text mr={'15px'}>{`Welcome ${name}!`}</Text>
        <LogoutBtn />
      </Flex>
    </Box>
  );
};
