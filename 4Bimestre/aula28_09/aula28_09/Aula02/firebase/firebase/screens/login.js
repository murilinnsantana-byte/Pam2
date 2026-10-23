import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './funcoes';
import { styles } from './loginestilo';

export default function Login({ navigation }) {
  const [nome, setNome] = useState('');
  const [palpite, setPalpite] = useState('');

  const handleSalvarPalpite = async () => {
    if (!nome || !palpite) {
      Alert.alert('Atenção', 'Preencha o seu nome e o seu palpite!');
      return;
    }

    try {
      await addDoc(collection(db, 'palpites'), {
        nome: nome,
        palpite: palpite,
        data: new Date()
      });
      Alert.alert('Sucesso!', 'Seu palpite para a Copa foi registrado!');
      setNome('');
      setPalpite('');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro ao salvar', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>🏆 COPA DO MUNDO</Text>
        <Text style={styles.subtitulo}>Portal Oficial de Torcedores</Text>
      </View>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Seu Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Quem será o Campeão da Copa?"
          value={palpite}
          onChangeText={setPalpite}
        />
        <TouchableOpacity style={styles.botao} onPress={handleSalvarPalpite}>
          <Text style={styles.textoBotao}>Registrar Palpite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}