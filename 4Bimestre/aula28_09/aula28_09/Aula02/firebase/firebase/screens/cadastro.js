import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './funcoes';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [selecao, setSelecao] = useState('');
  const [palpite, setPalpite] = useState('');

  const handleSalvar = async () => {
    if (!nome || !selecao || !palpite) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    try {
      // CREATE: Salva as informações na coleção 'palpites' do Firebase
      await addDoc(collection(db, 'palpites'), {
        nome: nome,
        selecao: selecao,
        palpite: palpite,
        criadoEm: new Date()
      });

      Alert.alert('Sucesso!', 'Cadastro da Copa realizado com sucesso!');
      
      // Limpa os campos
      setNome('');
      setSelecao('');
      setPalpite('');

      // Volta para a tela Home para visualizar os registros
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro ao cadastrar', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏆 Novo Cadastro da Copa</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Seu Nome"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Sua Seleção Favorita (ex: Brasil)"
          value={selecao}
          onChangeText={setSelecao}
        />

        <TextInput
          style={styles.input}
          placeholder="Qual será a final da Copa?"
          value={palpite}
          onChangeText={setPalpite}
        />

        <TouchableOpacity style={styles.botao} onPress={handleSalvar}>
          <Text style={styles.textoBotao}>Salvar no Firebase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B4F26', justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#FFD700', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 10 },
  input: { borderWidth: 1, borderColor: '#CCC', padding: 12, borderRadius: 6, marginBottom: 15, backgroundColor: '#F9F9F9' },
  botao: { backgroundColor: '#0B4F26', padding: 14, borderRadius: 6, alignItems: 'center' },
  textoBotao: { color: '#FFD700', fontWeight: 'bold', fontSize: 16 }
});