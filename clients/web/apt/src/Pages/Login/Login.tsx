import React, { FC } from 'react';
import './style.css';
import Deck from '@containers/Deck/Deck';
import LoginForm from '@containers/LoginForm/LoginForm';

const Login: FC = () => {
  return <Deck form={<LoginForm title="Connexion" signupHref="/signup" />} />;
};

export default Login;
