import { Contact } from 'components/Contact';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { List, Spinner } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <>
      {isLoading && (
        <Spinner
          position={'absolute'}
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#005daf"
          size="lg"
        />
      )}
      <List
        spacing={2}
        display={'flex'}
        flexDirection={'column'}
        gap={'20px'}
        mb={'100px'}
      >
        {filtredContacts.map(({ name, number, id }) => {
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
      </List>
    </>
  );
};
