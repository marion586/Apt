import React, { FC } from 'react';
import Dashboard from '@pages/Dashboard/Dashboard';
import AccueilContainer from '@containers/AccueilContainer/AccueilContainer';
import './style.css';

const Accueil: FC = () => {
  return (
    <>
      <Dashboard content={<AccueilContainer />} />
    </>
  );
};

export default Accueil;
