import AsyncStorage from '@react-native-community/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface Patient {
  cod: string;
}

interface PatientsContextData {
  list: Patient[];
  loading: boolean;
  addPatient(cod: string): Promise<void>;
  removePatient(cod: string): Promise<void>;
}

const PatientsContext = createContext<PatientsContextData>(
  {} as PatientsContextData,
);

export const PatientsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const patients = await AsyncStorage.getItem('@VirtualStats:patients');

      if (patients) {
        setData(JSON.parse(patients));
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const addPatient = useCallback(
    async (cod: string) => {
      const newData = [...data, { cod }];

      await AsyncStorage.setItem(
        '@VirtualStats:patients',
        JSON.stringify(newData),
      );

      setData(newData);
    },
    [data],
  );

  const removePatient = useCallback(
    async (cod: string) => {
      const newData = data.filter(patient => patient.cod !== cod);

      await AsyncStorage.setItem(
        '@VirtualStats:patients',
        JSON.stringify(newData),
      );

      setData(newData);
    },
    [data],
  );

  return (
    <PatientsContext.Provider
      value={{ list: data, loading, addPatient, removePatient }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export function usePatients(): PatientsContextData {
  const context = useContext(PatientsContext);

  if (!context) {
    throw new Error('useAuth must be used within a PatientsProvider');
  }

  return context;
}
