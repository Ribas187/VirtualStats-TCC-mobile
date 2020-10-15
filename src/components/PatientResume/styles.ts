import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton).attrs({
  elevation: 5,
})`
  background: #fff9fb;
  padding: 18px 20px;
  border-radius: 8px;
  margin: 0 5px 20px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.161);
`;

export const Name = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
`;

export const Info = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftArea = styled.View``;

export const Age = styled.Text`
  font-family: 'Roboto-Regular';
`;

export const State = styled.Text`
  font-family: 'Roboto-Regular';
`;

export const RightArea = styled.View``;

export const LastUpdate = styled.Text`
  font-family: 'Roboto-Medium';
`;

export const LastUpdateValue = styled.Text`
  font-family: 'Roboto-Regular';
`;
