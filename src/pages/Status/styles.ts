import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 20px 14px;
`;

export const ProfileCard = styled.View.attrs({
  elevation: 5,
})`
  background: #0b74bc;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 3px 4px 2px rgba(0, 0, 0, 0.161);
`;

export const Name = styled.Text`
  font-family: 'Roboto-Medium';
  align-self: center;
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileCardLeft = styled.View`
  max-width: 50%;
`;

export const ProfileCardRight = styled.View``;

export const InfoView = styled.View`
  flex-direction: row;
  margin: 2px 0;
`;

export const BlackText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 15px;
`;

export const WhiteText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #fff;
  font-size: 15px;
`;
