import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

export const Container = styled.View`
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
  flex: 1;
  background: #f9f9f9;
`;

export const Header = styled.View.attrs({
  elevation: 5,
})`
  background: #fff9fb;
  align-items: center;
  justify-content: center;
  height: 66px;
  width: 100%;
  padding: ${getStatusBarHeight() + 10}px 0;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.161);
`;

export const LogoImg = styled.Image``;

export const Wrapper = styled.View`
  padding: 20px 14px;
  flex: 1;
  justify-content: space-between;
`;

export const WelcomeCard = styled.View.attrs({
  elevation: 5,
})`
  background: #fff9fb;
  flex: 1;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.161);
  padding: 10px;
  margin-bottom: 30px;
`;

export const WelcomeImage = styled.Image``;

export const WelcomeText = styled.Text`
  margin-top: 20px;
  font-family: 'Roboto-Medium';
  font-size: 20px;
`;

export const StartButton = styled(RectButton).attrs({
  elevation: 3,
})`
  background: #0b74bc;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  margin-bottom: 20px;
`;

export const StartButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #fff;
  font-size: 18px;
`;
