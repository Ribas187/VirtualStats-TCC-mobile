import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { IStatusInfo } from '.';

export const Container = styled.View`
  flex: 1;
  background: #f9f9f9;
`;

export const Wrapper = styled(
  FlatList as new () => FlatList<IStatusInfo>,
).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 10px 14px;
  flex: 1;
`;
