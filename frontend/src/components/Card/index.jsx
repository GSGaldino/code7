import React from 'react';

import { Box, Stack, Avatar, Badge } from '@chakra-ui/react';

import store from '../../store';

import './styles.css';

export default function Card({ data, users }) {
  const user = users.filter(user => data.user_id === user.id)[0];

  return (
    <div id="card">

      <Box
        onClick={e => store.dispatch({type: "open", data: data})}
        className="card-box"
        maxW="sm"
        minW="310"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m="20px 0px"
        bg="white"
        p={6}
      >

        <Stack direction="row" alignItems="center" position="relative">

          <Avatar name={user && user.name} bg="purple.600" color="white" />

          <Box pl={4}>
            <Badge
              position="absolute"
              top="-20px"
              right="0px"
            >Default</Badge>
            <p className="name">{user && user.name}</p>
            <p className="debt">Dívida: {data && data.debt_value}</p>

          </Box>

        </Stack>

      </Box>

    </div>
  )
};
