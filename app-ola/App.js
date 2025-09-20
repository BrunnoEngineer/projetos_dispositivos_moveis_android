import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, Image} from 'react-native';
import HomeScreen from './componentes/HomeScreen';
import { useState } from 'react';

export default function App() {

  const [novoTexto, setnovoTexto] = useState ('');

  let [valor, setvalor] = useState ('');
  

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 100, height: 100}}
      />
              
      <TextInput
        placeholder='Digite Aqui!'
        onChangeText={novoTexto => setnovoTexto(novoTexto)}
        value={novoTexto}
      />
        
      <Text>Olá Mundo!</Text>
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
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
