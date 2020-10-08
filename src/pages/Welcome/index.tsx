import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/images/logo.png';
import welcomeImg from '../../assets/images/home-image.png';

import {
  Container,
  Header,
  LogoImg,
  Wrapper,
  WelcomeCard,
  WelcomeImage,
  WelcomeText,
  StartButton,
  StartButtonText,
} from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <Container>
        <Header>
          <LogoImg source={logoImg} />
        </Header>

        <Wrapper>
          <WelcomeCard>
            <WelcomeImage source={welcomeImg} />

            <WelcomeText>Seja muito bem-vindo ao Virtual Stats</WelcomeText>
          </WelcomeCard>

          <StartButton
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'App' }],
              });
            }}
          >
            <StartButtonText>Começar</StartButtonText>
          </StartButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default Welcome;
