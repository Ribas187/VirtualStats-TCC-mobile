import React from 'react';
import { PatientsProvider } from './patient';

const AppProvider: React.FC = ({ children }) => (
  <PatientsProvider>{children}</PatientsProvider>
);

export default AppProvider;
