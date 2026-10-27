import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { estilosGerais } from './Estilo';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // FUNÇÃO DE VALIDAÇÃO DE LOGIN
  const handleLogin = () => {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Por favor, informe seu e-mail e senha!');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Erro', 'Insira um e-mail válido!');
      return;
    }

    // Navega para a Home passando o e-mail do usuário logado
    navigation.navigate('Home', { usuarioEmail: email });
  };

  return (
    <View style={[estilosGerais.container, { justifyContent: 'center' }]}>
      <View style={estilosGerais.headerBanner}>
        <Text style={estilosGerais.brandSubtitle}>OFFICIAL STORE</Text>
        <Text style={estilosGerais.titulo}>🏆 World Cup Kit</Text>
        <Text style={estilosGerais.subtitulo}>A loja oficial dos mantos das seleções da Copa</Text>
      </View>

      <View style={estilosGerais.card}>
        <Text style={[estilosGerais.brandSubtitle, { marginBottom: 12 }]}>Acesse sua conta</Text>
        
        <TextInput
          style={estilosGerais.input}
          placeholder="E-mail do torcedor"
          placeholderTextColor="#64748B"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={estilosGerais.input}
          placeholder="Senha"
          placeholderTextColor="#64748B"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={estilosGerais.botaoDetalhes} onPress={handleLogin}>
          <Text style={estilosGerais.textoBotaoDetalhes}>ENTRAR NA LOJA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}