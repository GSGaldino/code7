import React from 'react';

import Header from '../components/Header';
import CardsWrapper from '../components/CardsWrapper';
import ModalCard from '../components/ModalCard';
import Footer from '../components/Footer';

import Api from '../services/api';

export default function Home() {
  const [debts, setDebts] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {

    (async () => {
      const debts = await Api.getDebts();
      const users = await Api.getUsers();

      setDebts(debts);
      setUsers(users);
    })();

  }, []);

  return (
    <div id="home">

      <Header />
      <CardsWrapper debts={debts} users={users}/>
      <ModalCard users={users}/>
      <Footer />

    </div>
  );
};
