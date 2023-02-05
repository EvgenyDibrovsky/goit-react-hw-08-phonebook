import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operations';
import { useState } from 'react';
import {
  Box,
  FormLabel,
  Input,
  Button,
  Flex,
  FormControl,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoIosClose, IoIosCheckmarkCircleOutline } from 'react-icons/io';
export const UpdateForm = ({ closeForm, contactToUpdate }) => {
  const [name, setName] = useState(contactToUpdate.name);
  const [number, setNumber] = useState(contactToUpdate.number);
  const toast = useToast();
  const dispatch = useDispatch();
  const bgColor = useColorModeValue('white', 'gray.700');
  const Color = useColorModeValue('black', 'white');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      updateContact({
        ...contactToUpdate,
        name,
        number,
      })
    );
    closeForm();
  };

  return (
    <Box
      bg={bgColor}
      maxWidth={300}
      borderWidth={1}
      borderRadius={5}
      boxShadow={'lg'}
      p={5}
      mx="auto"
      mt={10}
      position="fixed"
      top="30%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex={1000}
    >
      <Flex
        as={'form'}
        onSubmit={handleSubmit}
        flexDirection={'column'}
        align={'center'}
        justify={'center'}
        bg={bgColor}
      >
        <FormControl mb={5}>
          <FormLabel> Name</FormLabel>

          <Input
            bg={bgColor}
            color={Color}
            border={'1px solid #c3c3c3'}
            type="text"
            name="name"
            value={name}
            size="sm"
            onChange={handleChange}
          />

          <FormLabel> Number</FormLabel>

          <Input
            bg={bgColor}
            color={Color}
            border={'1px solid #c3c3c3'}
            type="text"
            name="number"
            value={number}
            size="sm"
            onChange={handleChange}
          />
        </FormControl>
        <Button
          type="submit"
          position="absolute"
          top="0"
          right="-3"
          bg="transparent"
          _hover={{
            bg: ('transparent', 'transparent'),
            color: 'red',
          }}
          onClick={closeForm}
        >
          <IoIosClose size="30px" />
        </Button>
        <Button
          size="sm"
          type="submit"
          bg="transparent"
          color="green"
          _hover={{
            bg: ('transparent', 'transparent'),
            color: '#1cb137',
          }}
          onClick={() =>
            toast({
              status: 'success',
              position: 'bottom-right',
              description: 'Your contact details has been updated',
            })
          }
        >
          <IoIosCheckmarkCircleOutline size="40px" />
        </Button>
      </Flex>
    </Box>
  );
};
