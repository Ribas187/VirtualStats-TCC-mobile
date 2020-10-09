import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import AppProvider from './hooks';

const App = (): React.ReactNode => {
  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar barStyle="light-content" backgroundColor="#0B74BC" />

        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
