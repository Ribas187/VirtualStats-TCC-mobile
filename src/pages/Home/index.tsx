import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import PatientResume from '../../components/PatientResume';
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
        setCod('');
      });
  }, [addPatient, cod]);

  return (
    <Container>
      <Header title="Consultar Paciente" />

      <Wrapper
        data={list}
        keyExtractor={patient => patient.cod}
        renderItem={({ item }) => <PatientResume cod={item.cod} />}
      />

      <Modal isVisible={isModalVisible} backdropOpacity={0.3}>
        <ModalWrapper>
          <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
            <CloseButton>
              <Icon name="x" size={30} color="#fff" />
            </CloseButton>
          </TouchableWithoutFeedback>
          <ModalView>
            <ModalText>Insira o Código:</ModalText>

            <CodInput onChangeText={e => setCod(e)} value={cod} />

            <TouchableWithoutFeedback onPress={handleAddCod} disabled={loading}>
              <ModalAddButton>
                {!loading ? (
                  <ModalAddButtonText>Concluir</ModalAddButtonText>
                ) : (
                  <ActivityIndicator />
                )}
              </ModalAddButton>
            </TouchableWithoutFeedback>
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
