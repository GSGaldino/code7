import React from 'react';

import Home from './pages';
import dotenv from 'dotenv';

import './global.css';

export default function App() {
  dotenv.config();

  return (
    <div className="App">
      <Home/>
    </div>
  );
}
