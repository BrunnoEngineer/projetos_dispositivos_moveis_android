import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import AsyncStorageExemplo from './Componentes/AsyncStorageExemplo';

export default function App() {
  return (
    <ScrollView>
      <AsyncStorageExemplo/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
