import React from 'react';

import Provider from '../Provider';
import { Box } from '@chakra-ui/react';

import heart from '../../assets/heart.svg';

import './styles.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Provider>

        <Box color="purple.600" display="flex" justifyContent="space-between" alignItems="center">

          <Box display="flex" alignItems="center">
            <p>Feito com</p>
            <img src={heart} alt="Imagem de um coração"/>
            <p>por Gabs</p>
          </Box>

          <Box display="flex" alignItems="center">
            <p>Github:</p>
            <a 
              href="https://github.com/gsgaldino" 
              target="_blank"
              rel="noreferrer"
            >
              gsgaldino
            </a>
          </Box>

        </Box>

      </Provider>
    </footer>
  );
};
