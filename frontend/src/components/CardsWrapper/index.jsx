import React from 'react';

import Provider from '../Provider';
import Card from '../Card';

import { Box, Wrap, WrapItem } from '@chakra-ui/react';

export default function CardsWrapper({ debts, users }) {

  return (
    <div id="cards-wrapper">
      <Provider>

        <Box p="20px 10px" >
          <Wrap justify="space-around" >

            {debts && debts
              .map(debt => <WrapItem><Card key={debt.debt_id} users={users} data={debt} /></WrapItem>)}

          </Wrap>
        </Box>


      </Provider>

    </div>
  );
};
