import React from 'react';

import Header from '../components/Header';
import CardsWrapper from '../components/CardsWrapper';
import Footer from '../components/Footer';

const data = [
  {name: "fulano silva", debt: "R$ 500"},
  {name: "ciclano teste", debt: "R$ 400"},
  {name: "bautrano outro", debt: "R$ 300"},
];

export default function Home(){
  return (
    <div id="home">

      <Header />
      <CardsWrapper data={data}/>
      <Footer />

    </div>
  );
};
