import { useNavigation, useRoute } from '@react-navigation/native';
import { differenceInYears, format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import api from '../../services/api';

import {
  Container,
  Wrapper,
  ProfileCard,
  Name,
  CardRow,
  ProfileCardLeft,
  ProfileCardRight,
  InfoView,
  BlackText,
  WhiteText,
  TitleView,
  DetailsText,
  TimeText,
  DetailsCard,
  GreyText,
  ObsView,
  InfoView2,
  Scroll,
} from './styles';

interface Hospital {
  nome: string;
}

interface Paciente {
  nome: string;
  nascimento: string;
  sexo: 'M' | 'F';
  leito: string;
  hospital: Hospital;
}

interface StatusInfo {
  paciente: Paciente;
  estado: string;
  hora: string;
  medicamento: string;
  alimentacao: string;
  observacao: string;
}

const Status: React.FC = () => {
  const [statusInfo, setStatusInfo] = useState<StatusInfo>({} as StatusInfo);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const { params } = useRoute();
  const { cod } = params as { cod: string };

  useEffect(() => {
    async function loadData(): Promise<void> {
      setLoading(true);

      const response = await api.get(`/stats-patient/last/${cod}`);

      setStatusInfo(response.data);
      setLoading(false);
    }

    loadData();
  }, [cod]);

  const timeFormatted = useMemo(() => {
    const dateFormatted = parseISO(statusInfo.hora);

    return statusInfo.hora
      ? format(dateFormatted, "dd/MM/yyyy '-' HH:mm", { locale: ptBR })
      : '';
  }, [statusInfo.hora]);

  const age = useMemo(() => {
    if (!statusInfo.paciente) {
      return '';
    }
    const dateFormatted = parseISO(statusInfo.paciente.nascimento);
    return differenceInYears(new Date(), dateFormatted);
  }, [statusInfo]);

  return (
    <Container>
      <Header
        title="Status"
        left={{ back: true }}
        right={{
          history: true,
          onPress: () => {
            console.log('histórico');
          },
        }}
      />

      {!loading ? (
        <Scroll>
          <Wrapper>
            <ProfileCard>
              <Name>{statusInfo.paciente.nome}</Name>

              <CardRow>
                <ProfileCardLeft>
                  <InfoView>
                    <BlackText>Idade: </BlackText>
                    <WhiteText>{age} anos</WhiteText>
                  </InfoView>
                  <InfoView>
                    <BlackText>Sexo: </BlackText>
                    <WhiteText>
                      {statusInfo.paciente.sexo === 'F'
                        ? 'Feminino'
                        : 'Masculino'}
                    </WhiteText>
                  </InfoView>
                  <InfoView>
                    <BlackText>Estado clínico: </BlackText>
                    <WhiteText>{statusInfo.estado}</WhiteText>
                  </InfoView>
                  <InfoView>
                    <BlackText>Hospital: </BlackText>
                    <WhiteText>{statusInfo.paciente.hospital.nome}</WhiteText>
                  </InfoView>
                  <InfoView>
                    <BlackText>Leito: </BlackText>
                    <WhiteText>{statusInfo.paciente.leito}</WhiteText>
                  </InfoView>
                </ProfileCardLeft>

                <ProfileCardRight>
                  <Icon name="user" size={100} color="#FFF" />
                </ProfileCardRight>
              </CardRow>
            </ProfileCard>

            <TitleView>
              <DetailsText>Detalhes:</DetailsText>
              <TimeText>{timeFormatted}</TimeText>
            </TitleView>

            <DetailsCard>
              <InfoView2>
                <BlackText>Medicação: </BlackText>
                <GreyText>{statusInfo.medicamento}</GreyText>
              </InfoView2>
              <InfoView2>
                <BlackText>Alimentação: </BlackText>
                <GreyText>{statusInfo.alimentacao}</GreyText>
              </InfoView2>
              <ObsView>
                <BlackText style={{ marginBottom: 14 }}>Observação: </BlackText>
                <GreyText>{statusInfo.observacao}</GreyText>
              </ObsView>
            </DetailsCard>
          </Wrapper>
        </Scroll>
      ) : (
        <ActivityIndicator
          color="#0B74BC"
          size={50}
          style={{ marginTop: 100 }}
        />
      )}
    </Container>
  );
};

export default Status;
