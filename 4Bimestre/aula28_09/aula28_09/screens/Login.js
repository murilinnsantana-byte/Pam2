import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { loginEstilos } from './LoginEstilo';
import { validarLogin } from './Funcoes';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    const resultado = validarLogin(usuario, senha);

    if (resultado.valido) {
      navigation.replace('Home', { usuario });
    } else {
      Alert.alert('Erro no acesso', resultado.mensagem);
    }
  };

  return (
    <View style={loginEstilos.container}>
      <View style={loginEstilos.logoArea}>
        <Text style={loginEstilos.brandBadge}>URBAN VIBE</Text>
        <Text style={loginEstilos.titulo}>Acesse sua conta</Text>
        <Text style={loginEstilos.subtitulo}>Sua coleção exclusiva de streetwear</Text>
      </View>
      
      <TextInput
        style={loginEstilos.input}
        placeholder="Usuário"
        placeholderTextColor="#64748B"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />
      
      <TextInput
        style={loginEstilos.input}
        placeholder="Senha"
        placeholderTextColor="#64748B"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={loginEstilos.botao} onPress={handleLogin}>
        <Text style={loginEstilos.textoBotao}>Entrar no App</Text>
      </TouchableOpacity>
    </View>
  );
}