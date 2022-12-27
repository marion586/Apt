import React, { FC } from 'react';
import './style.css';
import Deck from '@containers/Deck/Deck';
import SignupForm from '@containers/SignupForm/SignupForm';

const SignUp: FC = () => {
  return <Deck form={<SignupForm title="Inscription" loginHref="/" />} />;
};

export default SignUp;
