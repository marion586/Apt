import React, { FC } from 'react';
import './style.css';
import Deck from '@containers/Deck/Deck';
import ForgotForm from '@containers/ForgotForm/ForgotForm';

const Forgot: FC = () => {
  return <Deck form={<ForgotForm title="Mot de passe oublié?" />} />;
};

export default Forgot;
