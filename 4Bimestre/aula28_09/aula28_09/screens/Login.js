import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { loginEstilos } from './LoginEstilo';
import { autenticarUsuario } from './Funcoes';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (autenticarUsuario(usuario, senha)) {
      navigation.replace('Home');
    } else {
      Alert.alert('Atenção', 'Por favor, preencha o usuário e a senha!');
    }
  };

  return (
    <View style={loginEstilos.container}>
      <View style={loginEstilos.card}>
        <View style={loginEstilos.logoContainer}>
          <Text style={loginEstilos.logoTexto}>PAM App</Text>
          <Text style={loginEstilos.subtitulo}>Acesse para explorar o projeto</Text>
        </View>

        <Text style={loginEstilos.label}>Usuário</Text>
        <TextInput
          style={loginEstilos.input}
          placeholder="Digite seu usuário..."
          placeholderTextColor="#7f8c8d"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />

        <Text style={loginEstilos.label}>Senha</Text>
        <TextInput
          style={loginEstilos.input}
          placeholder="Digite sua senha..."
          placeholderTextColor="#7f8c8d"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={loginEstilos.botao} onPress={handleLogin}>
          <Text style={loginEstilos.textoBotao}>Entrar no Sistema</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}