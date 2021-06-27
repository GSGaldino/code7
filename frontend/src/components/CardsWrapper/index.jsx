import React from 'react';

import Provider from '../Provider';
import Card from '../Card';

import { Box, Wrap, WrapItem } from '@chakra-ui/react';

export default function CardsWrapper({ data }) {

  return (
    <div id="cards-wrapper">
      <Provider>

        <Box p="20px 10px" >
          <Wrap justify="space-around" >

            {data && data
              .map(item => <WrapItem><Card key={Math.random()} data={item} /></WrapItem>)}

          </Wrap>
        </Box>


      </Provider>

    </div>
  );
};
