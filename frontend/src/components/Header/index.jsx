import React from 'react';

import Provider from '../Provider';

import { Box, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import store from '../../store';

export default function Header() {
  return (
    <div id="header">
      <Box w="100%" bg="purple.600" color="white" p={2}>
        <Provider>
          <Box 
            display="flex" 
            justifyContent="space-between" 
            fontSize="2xl" 
            fontWeight="600" 
            p="10px"
          >

            <h2>Debt Manager</h2>

            <Button 
              colorScheme="purple"
              transition="all 0.3s ease"
              onClick={e => store.dispatch({type:"open", data: {}, isNewDebt: true})}
              _hover={{
                filter: "brightness(110%)"
              }}
            >
              <AddIcon
                fontSize="2xl"
                cursor="pointer"
              />
            </Button>


          </Box>
        </Provider>
      </Box>

    </div>
  );
};
