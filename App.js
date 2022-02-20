import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    alert(`${nome} do email ${email} e senha ${senha} estão cadastrados!`)
  }

  return (
    <View style={styles.container}>

      <StatusBar hidden />

      <Image style={{ width: 120, height: 200 }} source={require('./assets/coding_bg.jpg')} />

      <TextInput placeholder='Seu nome...' style={styles.textInput} onChangeText={text => setNome(text)} />
      <TextInput placeholder='Seu e-mail...' style={styles.textInput} onChangeText={text => setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder='Sua senha...' style={styles.textInput} onChangeText={text => setSenha(text)} />

      <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
        <Text style={{ color: 'white', textAlign: 'center' }}  >Cadastrar!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1e29',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 15,
    marginBottom: 10
  },
  btnCadastro: {
    width: '100%',
    height: 40,
    backgroundColor: '#7b42f5',
    borderRadius: 20,
    justifyContent: 'center'
  }
});
