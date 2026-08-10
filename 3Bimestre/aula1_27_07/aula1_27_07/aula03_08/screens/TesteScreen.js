import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

export default function TesteScreen({ navigation }) {
  const [tamanhoCm, setTamanhoCm] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularTamanho = () => {
    const cm = parseFloat(tamanhoCm);
    if (isNaN(cm) || cm <= 0) {
      setResultado('Por favor, informe uma medida válida.');
      return;
    }

    if (cm < 24) setResultado('Tamanho recomendado: BR 36 / US 5.5');
    else if (cm >= 24 && cm < 25) setResultado('Tamanho recomendado: BR 38 / US 7');
    else if (cm >= 25 && cm < 26) setResultado('Tamanho recomendado: BR 40 / US 8.5');
    else if (cm >= 26 && cm < 27.5) setResultado('Tamanho recomendado: BR 41 / US 9.5');
    else if (cm >= 27.5 && cm < 29) setResultado('Tamanho recomendado: BR 42 / US 10.5');
    else setResultado('Tamanho recomendado: BR 43+ / US 12+');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.badge}>RECOMENDAÇÃO INTELIGENTE</Text>
        <Text style={styles.title}>Nike Fit Calculator</Text>
        <Text style={styles.description}>
          Insira o comprimento do seu pé em centímetros para determinar o tamanho exato da sua numeração.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Comprimento do pé (ex: 26.5)"
          placeholderTextColor="#9CA3AF"
          keyboardType="numeric"
          value={tamanhoCm}
          onChangeText={setTamanhoCm}
        />

        <TouchableOpacity style={styles.calcButton} onPress={calcularTamanho}>
          <Text style={styles.calcButtonText}>CALCULAR NUMERAÇÃO</Text>
        </TouchableOpacity>

        {resultado && (
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>{resultado}</Text>
          </View>
        )}

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#1C1C1C',
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  badge: {
    color: '#E50914',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 20,
    lineHeight: 18,
  },
  input: {
    height: 48,
    backgroundColor: '#262626',
    borderRadius: 6,
    paddingHorizontal: 12,
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 12,
  },
  calcButton: {
    backgroundColor: '#E50914',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calcButtonText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 12,
    letterSpacing: 1,
  },
  resultBox: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#262626',
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#E50914',
  },
  resultText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '800',
  },
});