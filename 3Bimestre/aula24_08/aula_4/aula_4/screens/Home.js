import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './Estilo';
import { calcularIdade } from './Funcoes';

export default function Home() {
  const [nome, setNome] = useState('');
  const [anoNascimento, setAnoNascimento] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Calculadora de Idade
      </Text>

      <Text style={styles.label}>
        Nome
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        Ano de nascimento
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o ano de nascimento"
        keyboardType="numeric"
        value={anoNascimento}
        onChangeText={setAnoNascimento}
      />

      <TouchableOpacity
        style={styles.botaoCalcular}
        onPress={() =>
          calcularIdade(
            nome,
            anoNascimento,
            setResultado
          )
        }
      >
        <Text style={styles.textoCalcular}>
          Calcular Idade
        </Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>
        {resultado}
      </Text>

    </View>
  );
}