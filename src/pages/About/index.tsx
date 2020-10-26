import React from 'react';
import Header from '../../components/Header';
import logoImg from '../../assets/images/logo.png';

import { Container, Wrapper, Scroll, Card, CardText, Logo } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <Header title="Sobre" />
      <Logo source={logoImg} />

      <Scroll>
        <Wrapper>
          <Card>
            <CardText>
              Este é um software montado em conjunto com um grupo de amigos
              feito para auxiliar a comunicação e distribuição de informação
              entre hospitais e responsáveis.
            </CardText>
            <CardText>
              Para que os mesmos estejam cientes das informações necessárias de
              acompanhamento, o Virtual Stats proporciona uma visibilidade de
              fichas de pacientes que contém as informações permitidas de serem
              divulgadas para os responsáveis pelos próprios médicos. Reduzindo
              assim o trabalho e tempo gasto em ligações para com os hospitais.
            </CardText>
            <CardText>
              Tudo isso com uma interface propositalmente simples e intuitiva
              para facilitar o amplo uso de quaisquer pessoas que queiram saber
              o estado de seu parente, amigo etc.
            </CardText>
            <CardText>
              Esperamos que este software esteja sendo útil pra você(s).
            </CardText>
            <CardText>Atenciosamente, equipe Virtual Stats</CardText>
          </Card>
        </Wrapper>
      </Scroll>
    </Container>
  );
};

export default About;
