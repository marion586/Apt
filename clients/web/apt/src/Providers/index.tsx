import React, { FC } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: FC<ProviderProps> = ({ children }) => {
  return <>{children}</>;
};
