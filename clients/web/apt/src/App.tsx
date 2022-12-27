import React, { FC, useContext } from 'react';
import './App.less';
import Routes from '@routes';
import { ApolloProvider } from '@apollo/client';
import { createClient } from '@config/ApolloClient';
import { AuthContext, AuthProvider } from '@providers/Authentification';
import { Provider } from '@providers/index';

interface TokenProviderProps {
  children: React.ReactNode;
}

const TokenProvider: FC<TokenProviderProps> = ({ children }) => {
  const { token } = useContext(AuthContext);
  const client = createClient(token);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const App = () => {
  return (
    <AuthProvider>
      <TokenProvider>
        <Provider>
          <Routes />
        </Provider>
      </TokenProvider>
    </AuthProvider>
  );
};

export default App;
