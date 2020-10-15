import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  ProfileCard,
  Name,
  CardRow,
  ProfileCardLeft,
  ProfileCardRight,
  InfoView,
  BlackText,
  WhiteText,
} from './styles';

const Status: React.FC = () => {
  return (
    <Container>
      <Header title="Status" left={{ back: true }} />

      <Wrapper>
        <ProfileCard>
          <Name>Ribas Paciente</Name>

          <CardRow>
            <ProfileCardLeft>
              <InfoView>
                <BlackText>Idade: </BlackText>
                <WhiteText>18 anos</WhiteText>
              </InfoView>
              <InfoView>
                <BlackText>Sexo: </BlackText>
                <WhiteText>Masculino</WhiteText>
              </InfoView>
              <InfoView>
                <BlackText>Estado clínico: </BlackText>
                <WhiteText>Internado</WhiteText>
              </InfoView>
              <InfoView>
                <BlackText>Hospital: </BlackText>
                <WhiteText>Samaritano</WhiteText>
              </InfoView>
              <InfoView>
                <BlackText>Leito: </BlackText>
                <WhiteText>3 - Ala B</WhiteText>
              </InfoView>
            </ProfileCardLeft>

            <ProfileCardRight>
              <Icon name="user" size={100} color="#FFF" />
            </ProfileCardRight>
          </CardRow>
        </ProfileCard>
      </Wrapper>
    </Container>
  );
};

export default Status;
