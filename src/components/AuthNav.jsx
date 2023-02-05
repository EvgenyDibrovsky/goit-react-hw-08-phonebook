import { Flex } from '@chakra-ui/layout';
import { AuthRegBtn } from './Buttons';

export const AuthNav = () => {
  return (
    <Flex
      as="nav"
      h={16}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <AuthRegBtn role={'Login'} path={'login'} mlSize={1} />
      <AuthRegBtn role={'Register'} path={'register'} mlSize={1} />
    </Flex>
  );
};
