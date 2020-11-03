import React, { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Time,
  Info,
  LeftArea,
  State,
  Hospital,
  RightArea,
  SeeMore,
  SeeMoreText,
} from './styles';

interface IProps {
  data: any;
}

interface StatsInfo {
  estado: string;
  hora: string;
  hospital: string;
}

const PatientHistoryResume: React.FC<IProps> = ({ data }) => {
  const [statsInfo, setStatsInfo] = useState<StatsInfo>({} as StatsInfo);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadData(): Promise<void> {
      setLoading(true);

      const response = await api.get(`/stats/${data.paciente.cod}/${data.id}`);

      const { estado, hora, paciente } = response.data;

      const info = {
        estado,
        hospital: paciente.hospital.nome,
        hora,
      };

      setStatsInfo(info);
      setLoading(false);
    }

    loadData();
  }, [data]);

  const timeFormatted = useMemo(() => {
    const dateFormatted = parseISO(statsInfo.hora);

    return statsInfo.hora
      ? format(dateFormatted, "dd/MM/yy '-' HH:mm", { locale: ptBR })
      : '';
  }, [statsInfo.hora]);

  return (
    <Container>
      {!loading ? (
        <>
          <Info>
            <LeftArea>
              <Time>{timeFormatted}</Time>
              <State>Estado: {statsInfo.estado}</State>
              <Hospital>Hospital: {statsInfo.hospital}</Hospital>
            </LeftArea>

            <RightArea>
              <SeeMore
                onPress={() =>
                  navigation.navigate('Status', {
                    cod: data.paciente.cod,
                    id: data.id,
                    // eslint-disable-next-line prettier/prettier
                  })}
              >
                <SeeMoreText>Ver mais</SeeMoreText>
              </SeeMore>
            </RightArea>
          </Info>
        </>
      ) : (
        <ActivityIndicator color="#0B74BC" />
      )}
    </Container>
  );
};

export default PatientHistoryResume;
