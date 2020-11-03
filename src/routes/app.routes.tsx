import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Status from '../pages/Status';
import DrawerContent from '../components/DrawerContent';
import About from '../pages/About';
import Contact from '../pages/Contact';
import History from '../pages/History';

const StackRoutes: React.FC = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Status" component={Status} />
      <AppStack.Screen name="History" component={History} />
    </AppStack.Navigator>
  );
};

const DrawerRoutes: React.FC = () => {
  const AppDrawer = createDrawerNavigator();

  return (
    <AppDrawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <AppDrawer.Screen name="App" component={StackRoutes} />
      <AppDrawer.Screen name="About" component={About} />
      <AppDrawer.Screen name="Contact" component={Contact} />
    </AppDrawer.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  return <DrawerRoutes />;
};

export default AppRoutes;
