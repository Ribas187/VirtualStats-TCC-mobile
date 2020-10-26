/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

import { Container, DrawerFooter, Content, DrawerSection } from './styles';

const colors = {
  white: '#fff',
};

const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const { navigation } = props;
  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <Content>
          <DrawerSection>
            <DrawerItem
              icon={({ size }) => (
                <Icon name="list" size={size} color={colors.white} />
              )}
              inactiveTintColor={colors.white}
              label="Listagem"
              onPress={() => navigation.navigate('App')}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon name="info" size={size} color={colors.white} />
              )}
              inactiveTintColor={colors.white}
              label="Sobre"
              onPress={() => navigation.navigate('About')}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon name="mail" size={size} color={colors.white} />
              )}
              inactiveTintColor={colors.white}
              label="Contato"
              onPress={() => navigation.navigate('Contact')}
            />
          </DrawerSection>
        </Content>
      </DrawerContentScrollView>
      <DrawerFooter>
        <DrawerItem
          icon={({ size }) => (
            <Icon name="settings" size={size} color={colors.white} />
          )}
          inactiveTintColor={colors.white}
          label="Configurações"
          onPress={() => navigation.navigate('Settings')}
        />
      </DrawerFooter>
    </Container>
  );
};

export default DrawerContent;
