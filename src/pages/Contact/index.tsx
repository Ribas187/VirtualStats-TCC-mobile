import React from 'react';
import Header from '../../components/Header';
import contactImg from '../../assets/images/contact-image.png';

import { Card, Container, Scroll, Image, Wrapper } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <Header title="Contato" />

      <Scroll>
        <Wrapper>
          <Card>
            <Image source={contactImg} />
          </Card>
        </Wrapper>
      </Scroll>
    </Container>
  );
};

export default Contact;
