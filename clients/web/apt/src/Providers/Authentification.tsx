import React from 'react';
import { createContext, FC, useState } from 'react';

type AuthProviderType = {
  children: React.ReactNode;
};

type AuthType = {
  token: string | null;
  login: (token: string | null) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthType>({
  token: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        token,
        login: (token: string | null) => {
          localStorage.setItem('token', token ? token : '');
          setToken(token);
        },
        logout: () => {
          localStorage.removeItem('token');
          setToken(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
