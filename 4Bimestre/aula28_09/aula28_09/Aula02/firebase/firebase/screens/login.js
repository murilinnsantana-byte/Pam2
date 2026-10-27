import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './funcoes';
import { styles } from './loginestilo';

export default function Login({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleEntrar = async () => {
    if (!nome.trim() || !email.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha o seu Nome e E-mail para continuar.');
      return;
    }

    try {
      // Salva a sessão/login do usuário no Firebase (CREATE)
      await addDoc(collection(db, 'usuarios'), {
        nome: nome,
        email: email,
        dataAcesso: new Date()
      });

      Alert.alert('Bem-vindo!', `Acesso liberado, ${nome}!`);
      navigation.navigate('Home', { usuarioNome: nome });
    } catch (error) {
      Alert.alert('Erro ao conectar', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=300' }} 
          style={styles.logoIcon} 
        />
        <Text style={styles.badge}>FIFA WORLD CUP</Text>
        <Text style={styles.titulo}>PORTAL COPA</Text>
        <Text style={styles.subtitulo}>Acesse sua conta para conferir tudo e registrar seus palpites</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Murilo Santana"
          placeholderTextColor="#536357"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>E-mail do Torcedor</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: murilo@email.com"
          placeholderTextColor="#536357"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.botao} onPress={handleEntrar}>
          <Text style={styles.textoBotao}>ACESSAR O PORTAL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}