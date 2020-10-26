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
  padding: 12px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.161);
`;

export const CardText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  margin-bottom: 14px;
`;

export const Image = styled.Image`
  align-self: center;
  margin: 15px 0;
`;
