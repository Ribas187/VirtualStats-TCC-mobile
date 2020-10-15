import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: ${(Platform.OS === 'ios' ? getStatusBarHeight() : 0) + 18}px 18px
    18px;
  width: 100%;
  background: #0b74bc;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: #fff;
`;

export const LeftButton = styled(RectButton)``;

export const RightButton = styled(RectButton)`
  min-width: 30px;
`;
