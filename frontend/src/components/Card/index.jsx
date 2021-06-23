import React from 'react';

import { Box, Stack, Avatar, Badge } from '@chakra-ui/react';
import store from '../../store';

import './styles.css';

export default function Card(props) {
  const pageData = props.data && props.data;
  console.log(props);

  return (
    <div id="card" {...props}>

      <Box
        onClick={e => store.dispatch({type: "open"})}
        className="card-box"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m="20px 0px"
        bg="white"
        p={6}
      >

        <Stack direction="row" alignItems="center" position="relative">

          <Avatar name={pageData.name} bg="purple.600" color="white" />

          <Box pl={4}>
            <Badge
              position="absolute"
              top="-20px"
              right="0px"
            >Default</Badge>
            <p className="name">{pageData.name}</p>
            <p className="debt">Dívida: {pageData.debt}</p>
          </Box>

        </Stack>

      </Box>

    </div>
  )
};
