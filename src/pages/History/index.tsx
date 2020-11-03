import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import Header from '../../components/Header';
import { Container, Wrapper } from './styles';
import api from '../../services/api';
import PatientHistoryResume from '../../components/PatientHistoryResume';
import { Patient } from '../../hooks/patient';

export interface IStatusInfo {
  id: number;
  paciente: Patient;
  hora: string;
  estado: string;
  hospital: string;
}

const History: React.FC = () => {
  const [statsList, setStatsList] = useState<IStatusInfo[]>(
    [] as IStatusInfo[],
  );

  const { params } = useRoute();
  const { cod } = params as { cod: string };

  useEffect(() => {
    async function loadData(): Promise<void> {
      const response = await api.get(`/stats-patient/${cod}`);

      const info = response.data.map((status: any) => {
        const { id, estado, hora, paciente } = status;

        return {
          id,
          paciente,
          hora,
          estado,
          hospital: paciente.hospital.nome,
        };
      });

      setStatsList(info);
    }

    loadData();
  }, [cod]);

  return (
    <Container>
      <Header title="Histórico" left={{ back: true }} />

      <Wrapper
        data={statsList}
        keyExtractor={stats => String(stats.id)}
        renderItem={({ item }) => <PatientHistoryResume data={item} />}
      />
    </Container>
  );
};

export default History;
