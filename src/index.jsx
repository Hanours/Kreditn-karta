import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import CreditCard from './components/CreditCard'

const App = () => {
  return (
    <>
      <CreditCard/>
    </>
  );
};


createRoot(document.querySelector('#app'),).render(<App />);
