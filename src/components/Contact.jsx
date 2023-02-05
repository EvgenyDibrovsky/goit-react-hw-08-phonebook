import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { Flex, Button, Text, useToast } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { UpdateForm } from 'components/UpdateContact';
import { BsPhone, BsTrash, BsFillPencilFill } from 'react-icons/bs';

export const Contact = ({ name, number, id }) => {
  const contacts = useSelector(selectContacts);
  const [contactToUpdate, setContactToUpdate] = useState(null);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast({
      status: 'success',
      position: 'bottom-right',
      description: 'Your contact has been successfully deleted',
    });
  };

  const handleShowUpdateForm = () => {
    setContactToUpdate(contacts.find(contact => contact.id === id));
  };

  const handleCloseForm = () => {
    setContactToUpdate(null);
  };

  return (
    <Flex align="center" justify="space-between" gap="10px">
      <BsPhone size={20} color="#007ad1" />

      <Text ml="1%" mr="auto" fontWeight="500">
        {name}
      </Text>
      <Text ml="auto" mr="1%" fontWeight="500">
        {number}
      </Text>
      <Button onClick={handleShowUpdateForm}>
        <BsFillPencilFill size={20} color="#007ad1" />
      </Button>
      <Button onClick={handleDelete}>
        <BsTrash size={20} color="#a90000" />
      </Button>
      {contactToUpdate && contactToUpdate.id === id && (
        <UpdateForm
          contactToUpdate={contactToUpdate}
          closeForm={handleCloseForm}
        />
      )}
    </Flex>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
