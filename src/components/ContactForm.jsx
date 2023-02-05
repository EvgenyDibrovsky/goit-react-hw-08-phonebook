import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { Input, Stack, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { AddContactBtn } from './Buttons';
import { useColorModeValue } from '@chakra-ui/react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const toast = useToast();
  const bgColor = useColorModeValue('white', 'whiteAlpha.200');
  const Color = useColorModeValue('black', 'white');
  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.find(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      toast({
        description: `${name} is already in contacts`,
        status: 'error',
        position: 'top',
      });
      reset();
      return;
    }

    const contact = { name, number };
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Stack as="form" spacing={2} onSubmit={handleSubmit} mb={5}>
      <InputGroup>
        <InputLeftAddon
          children="Name:"
          w="5.5rem"
          fontSize="1em"
          border={'1px solid #c3c3c3'}
        />
        <Input
          border={'1px solid #c3c3c3'}
          bg={bgColor}
          color={Color}
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          w="17rem"
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup>
        <InputLeftAddon
          children="Number:"
          w="5.5rem"
          fontSize="1em"
          border={'1px solid #c3c3c3'}
        />
        <Input
          bg={bgColor}
          color={Color}
          border={'1px solid #c3c3c3'}
          value={number}
          type="tel"
          name="number"
          placeholder="Phone Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          w="17rem"
          onChange={handleChange}
        />
      </InputGroup>

      <AddContactBtn type="submit" />
    </Stack>
  );
};
