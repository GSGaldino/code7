import React from 'react';

import Provider from '../Provider';
import Card from '../Card';

import { Box, Flex } from '@chakra-ui/react';

export default function CardsWrapper({ data }) {

  return (
    <div id="cards-wrapper">
      <Provider>

        <Box p="20px 10px" >
          <Flex justify="space-between" wrap="wrap">

            {data && data
              .map(item => <Card key={Math.random()} data={item} />)}

          </Flex>
        </Box>


      </Provider>

    </div>
  );
};
