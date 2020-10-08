import React, { useState } from 'react';
import { Text } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';

import {
  Container,
  AddButton,
  Wrapper,
  ModalView,
  CloseButton,
  ModalText,
  CodInput,
  ModalAddButton,
  ModalAddButtonText,
  ModalWrapper,
} from './styles';

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Container>
      <Header title="Consultar Paciente" />

      <Wrapper>
        <Text>Lista</Text>
      </Wrapper>

      <Modal isVisible={isModalVisible} backdropOpacity={0.3}>
        <ModalWrapper>
          <CloseButton onPress={() => setIsModalVisible(false)}>
            <Icon name="x" size={30} color="#fff" />
          </CloseButton>
          <ModalView>
            <ModalText>Insira o Código:</ModalText>

            <CodInput />

            <ModalAddButton>
              <ModalAddButtonText>Concluir</ModalAddButtonText>
            </ModalAddButton>
          </ModalView>
        </ModalWrapper>
      </Modal>

      <AddButton onPress={() => setIsModalVisible(true)}>
        <Icon name="plus" size={40} color="#fff" />
      </AddButton>
    </Container>
  );
};

export default Home;
