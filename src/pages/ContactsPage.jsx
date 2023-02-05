import { Flex, Heading } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { useColorModeValue } from '@chakra-ui/react';

const ContactsPage = () => {
  const bgColor = useColorModeValue('transparent', 'transparent');
  return (
    <Flex
      name="flex"
      direction="column"
      align="center"
      pt={10}
      px={10}
      bg={bgColor}
    >
      <Heading as={'h2'} fontSize={'xl'} display="flex" mb={5}>
        Add new contact:
      </Heading>
      <ContactForm />

      <Heading as={'h2'} fontSize={'xl'} display="flex" mb={5}>
        Contacts
      </Heading>
      <Filter />
      <ContactList />
    </Flex>
  );
};

export default ContactsPage;
