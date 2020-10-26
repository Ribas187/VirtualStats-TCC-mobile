import styled from 'styled-components/native';
import { Drawer } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background-color: #0b74bc;
`;

export const Content = styled.View`
  flex: 1;
`;

export const DrawerSection = styled(Drawer.Section)`
  margin-top: 40px;
`;

export const DrawerFooter = styled(Drawer.Section)`
  margin-bottom: 15px;
  border-top-color: #f4f4f4;
  border-top-width: 1px;
`;
