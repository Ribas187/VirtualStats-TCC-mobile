import React, { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { format, differenceInYears, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ActivityIndicator } from 'react-native';
import useSWR from 'swr';
import api from '../../services/api';

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

interface IProps {
  cod: string;
}

interface PatientInfo {
  nome: string;
  nascimento: string;
  estado: string;
  lastUpdate: string;
}

const PatientResume: React.FC<IProps> = ({ cod }) => {
  const [patientInfo, setPatientInfo] = useState<PatientInfo>(
    {} as PatientInfo,
  );
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const fetcher = (url: string) => api.get(url).then(response => response.data);

  const { data } = useSWR(`/stats-patient/last/${cod}`, fetcher, {
    refreshInterval: 10000,
  });

  useEffect(() => {
    async function loadData(): Promise<void> {
      setLoading(true);

      const { estado, hora, paciente } = data;

      const info = {
        estado,
        nascimento: paciente.nascimento,
        lastUpdate: hora,
        nome: paciente.nome,
      };

      setPatientInfo(info);
      setLoading(false);
    }

    loadData();
  }, [cod, data]);

  const timeFormatted = useMemo(() => {
    const dateFormatted = parseISO(patientInfo.lastUpdate);

    return patientInfo.lastUpdate
      ? format(dateFormatted, "dd/MM/yy '-' HH:mm", { locale: ptBR })
      : '';
  }, [patientInfo.lastUpdate]);

  const age = useMemo(() => {
    const dateFormatted = parseISO(patientInfo.nascimento);
    return differenceInYears(new Date(), dateFormatted);
  }, [patientInfo.nascimento]);

  return (
    <Container onPress={() => navigation.navigate('Status', { cod })}>
      {!loading ? (
        <>
          <Name>{patientInfo.nome}</Name>

          <Info>
            <LeftArea>
              <Age>{age} anos</Age>
              <State>Estado: {patientInfo.estado}</State>
            </LeftArea>

            <RightArea>
              <LastUpdate>Última atualização:</LastUpdate>
              <LastUpdateValue>{timeFormatted}</LastUpdateValue>
            </RightArea>
          </Info>
        </>
      ) : (
        <ActivityIndicator color="#0B74BC" />
      )}
    </Container>
  );
};

export default PatientResume;
