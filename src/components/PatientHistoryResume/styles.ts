import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 5,
})`
  background: #fff9fb;
  padding: 18px 20px;
  min-height: 86px;
  border-radius: 8px;
  margin: 10px 5px 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.161);
`;

export const Time = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftArea = styled.View``;

export const State = styled.Text`
  margin-top: 5px;
  font-family: 'Roboto-Regular';
`;

export const Hospital = styled.Text`
  font-family: 'Roboto-Regular';
`;

export const RightArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export const SeeMore = styled(RectButton)``;

export const SeeMoreText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #0b74bc;
`;
