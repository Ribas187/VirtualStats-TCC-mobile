import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Container,
  Name,
  Info,
  LeftArea,
  Age,
  State,
  RightArea,
  LastUpdate,
  LastUpdateValue,
} from './styles';

const PatientResume: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Status')}>
      <Name>Ribas paciente</Name>

      <Info>
        <LeftArea>
          <Age>17 anos</Age>
          <State>Estado: Internado</State>
        </LeftArea>

        <RightArea>
          <LastUpdate>Última atualização:</LastUpdate>
          <LastUpdateValue>18/07/20 - 15:29</LastUpdateValue>
        </RightArea>
      </Info>
    </Container>
  );
};

export default PatientResume;
