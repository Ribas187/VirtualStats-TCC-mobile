/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/images/logo-white.png';

import {
  Container,
  DrawerFooter,
  Content,
  DrawerSection,
  LogoView,
  ImageLogo,
} from './styles';

const colors = {
  white: '#fff',
};

const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const { navigation } = props;
  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <Content>
          <LogoView>
            <ImageLogo source={logoImg} resizeMode="contain" />
          </LogoView>
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
          onPress={() => console.log('Config')}
        />
      </DrawerFooter>
    </Container>
  );
};

export default DrawerContent;
