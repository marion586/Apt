import React, { FC } from 'react';
import './style.css';
import Deck from '@containers/Deck/Deck';
import RenewForm from '@containers/RenewForm/RenewForm';

const Renew: FC = () => {
  return <Deck form={<RenewForm title="Mot de passe oublié?" />} />;
};

export default Renew;
