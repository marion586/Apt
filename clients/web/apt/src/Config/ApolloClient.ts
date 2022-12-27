import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { API_URL, REACT_APP_WS_URL } from './AppConfig';

export const createClient = (token: string | null) => {
  const httpLink = createHttpLink({
    uri: API_URL || 'http://10.0.2.2:4000/graphql',
  });

  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  console.log('REACT_APP_WS_URL', REACT_APP_WS_URL);

  const wsLink = new WebSocketLink({
    uri: REACT_APP_WS_URL || 'ws://10.0.2.2:4000/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        authToken: token || '',
      },
    },
  });

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    authLink.concat(httpLink),
  );

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};
