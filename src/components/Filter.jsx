import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filter/filterSlice';
import { Flex, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
export const Filter = () => {
  const dispatch = useDispatch();
  const bgColor = useColorModeValue('white', 'whiteAlpha.200');
  const Color = useColorModeValue('black', 'white');
  return (
    <Flex>
      <InputGroup>
        <InputLeftAddon
          children="Find contacts :"
          fontSize="1em"
          border={'1px solid #c3c3c3'}
        />
        <Input
          bg={bgColor}
          color={Color}
          border={'1px solid #c3c3c3'}
          type="text"
          name="filter"
          placeholder="Enter name"
          onChange={e => dispatch(setFilterValue(e.target.value))}
          mb={5}
        />
      </InputGroup>
    </Flex>
  );
};
