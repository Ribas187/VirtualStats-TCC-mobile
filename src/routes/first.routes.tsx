import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import AppRoutes from './app.routes';

const { Navigator, Screen } = createStackNavigator();

const FirstRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="App" component={AppRoutes} />
    </Navigator>
  );
};

export default FirstRoutes;
