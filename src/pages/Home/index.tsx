import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, Text } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import { usePatients } from '../../hooks/patient';
import api from '../../services/api';

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
  const [cod, setCod] = useState('');
  const [loading, setLoading] = useState(false);

  const { addPatient, list } = usePatients();

  const handleAddCod = useCallback(() => {
    if (!cod) {
      Alert.alert('Erro', 'Precisa preencher o código');
      return;
    }

    setLoading(true);

    api
      .get(`/patients/${cod}`)
      .then(() => {
        addPatient(cod).then(() => {
          setIsModalVisible(false);
        });
      })
      .catch(() => {
        Alert.alert('Erro', 'Código inválido');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [addPatient, cod]);

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

            <CodInput onChangeText={e => setCod(e)} value={cod} />

            <ModalAddButton onPress={handleAddCod} enabled={!loading}>
              {!loading ? (
                <ModalAddButtonText>Concluir</ModalAddButtonText>
              ) : (
                <ActivityIndicator />
              )}
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
