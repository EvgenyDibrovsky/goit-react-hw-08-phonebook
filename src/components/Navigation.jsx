import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Flex} from '@chakra-ui/react';
import { HeaderBtn } from './Buttons';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
    <Flex>
      {!token && <HeaderBtn role={'Home'} path={'/'} />}
      {token && (
        <HeaderBtn role={'Contacts'} path={'/contacts'} mlSize={3} />
      )}
    </Flex>
    </nav>
  );
};
