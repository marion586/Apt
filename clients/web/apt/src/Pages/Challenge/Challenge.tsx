import React, { FC } from 'react';
import Dashboard from '@pages/Dashboard/Dashboard';
import ChallengeContainer from '@containers/ChallengeContainer/ChallengeContainer';
import './style.css';

const Challenge: FC = () => {
  return (
    <>
      <Dashboard content={<ChallengeContainer />} />
    </>
  );
};

export default Challenge;
