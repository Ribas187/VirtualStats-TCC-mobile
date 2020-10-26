import styled from 'styled-components/native';
import { Drawer } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background-color: #0b74bc;
`;

export const Content = styled.View`
  flex: 1;
`;

export const LogoView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ImageLogo = styled.Image`
  height: 54px;
`;

export const DrawerSection = styled(Drawer.Section)`
  border-top-color: #f4f4f4;
  border-top-width: 1px;
`;

export const DrawerFooter = styled(Drawer.Section)`
  margin-bottom: 15px;
  border-top-color: #f4f4f4;
  border-top-width: 1px;
`;
