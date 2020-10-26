import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Scroll = styled.ScrollView``;

export const Wrapper = styled.View`
  padding: 20px 15px;
`;

export const Card = styled.View.attrs({
  elevation: 5,
})`
  padding: 20px 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.161);
`;

export const Image = styled.Image`
  align-self: center;
  height: 400px;
`;

export const CardBlue = styled.View.attrs({
  elevation: 5,
})`
  margin-top: 10px;
  padding: 12px;
  border-radius: 8px;
  background: #0b74bc;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.161);
`;

export const ContactView = styled.View`
  flex-direction: row;
`;

export const WhiteText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  margin-bottom: 14px;
  color: #fff;
`;

export const EmailText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  margin-bottom: 14px;
  color: #fff;
  text-decoration: underline;
  text-decoration-color: #fff;
`;

export const EmailLink = styled(RectButton)``;
