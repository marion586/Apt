import AdminEvent from '@containers/AdminEvent';
import Dashboard from '@pages/Dashboard';
import React from 'react';

const Event: React.FC = () => {
  return (
    <>
      <Dashboard content={<AdminEvent />} />
    </>
  );
};

export default Event;
