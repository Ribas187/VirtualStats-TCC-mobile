import React, { useCallback } from 'react';
import * as MailComposer from 'expo-mail-composer';

import Header from '../../components/Header';
import contactImg from '../../assets/images/contact-image.png';

import {
  Card,
  Container,
  Scroll,
  Image,
  Wrapper,
  CardBlue,
  ContactView,
  WhiteText,
  EmailText,
  EmailLink,
} from './styles';

const Contact: React.FC = () => {
  const sendMail = useCallback(() => {
    MailComposer.composeAsync({
      subject: 'Contato VirtualStats',
      recipients: ['virtualstatsapp@gmail.com'],
    });
  }, []);

  return (
    <Container>
      <Header title="Contato" />

      <Scroll>
        <Wrapper>
          <Card>
            <Image source={contactImg} resizeMode="contain" />
          </Card>

          <CardBlue>
            <WhiteText>Fale com a gente:</WhiteText>

            <ContactView>
              <WhiteText>Email: </WhiteText>
              <EmailLink onPress={sendMail}>
                <EmailText>virtualstatsapp@gmail.com</EmailText>
              </EmailLink>
            </ContactView>
          </CardBlue>
        </Wrapper>
      </Scroll>
    </Container>
  );
};

export default Contact;
