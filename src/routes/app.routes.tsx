import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Status from '../pages/Status';

const StackRoutes: React.FC = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Status" component={Status} />
    </AppStack.Navigator>
  );
};

const DrawerRoutes: React.FC = () => {
  const AppDrawer = createDrawerNavigator();

  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="App" component={StackRoutes} />
    </AppDrawer.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  return <DrawerRoutes />;
};

export default AppRoutes;
