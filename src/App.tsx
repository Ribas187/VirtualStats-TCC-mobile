import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const App = (): React.ReactNode => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0B74BC" />

      <Routes />
    </NavigationContainer>
  );
};

export default App;
