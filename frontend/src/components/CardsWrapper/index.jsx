import React from 'react';

import Provider from '../Provider';
import Card from '../Card';
import ModalForm from '../ModalForm';

import { Box } from '@chakra-ui/react';

export default function CardsWrapper({ data }) {
  const [formFields, setFormFields] = React.useState({});

  return (
    <div id="cards-wrapper">
      <Provider>

        <Box p="20px 0px">

          {data && data
          .map(item => <Card key={Math.random()} data={item} onClick={e => setFormFields(item)}/>)}

        </Box>


      </Provider>

      <ModalForm data={formFields}/>

    </div>
  )
};
