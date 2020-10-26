import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import FirstRoutes from './first.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    async function verify(): Promise<void> {
      const firstTimeValue = await AsyncStorage.getItem(
        '@VirtualStats:first-time',
      );

      if (!firstTimeValue) {
        setFirstTime(true);

        await AsyncStorage.setItem(
          '@VirtualStats:first-time',
          JSON.stringify(true),
        );
      } else {
        setFirstTime(false);
      }
    }

    verify();
  }, []);

  return firstTime ? <FirstRoutes /> : <AppRoutes />;
};

export default Routes;
