import React, { FC } from 'react';
import './style.css';
import Deck from '@containers/Deck/Deck';
import ValidationForm from '@containers/ValidationForm/ValidationForm';

const Validation: FC = () => {
  return <Deck form={<ValidationForm title="Mot de passe oublié?" />} />;
};

export default Validation;
