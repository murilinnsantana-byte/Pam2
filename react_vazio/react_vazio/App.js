import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.titulo}>
        <Text style={styles.textTitulo}>Meu diário</Text>
      </View>

      <View style={styles.contTexto}>
        <Text style={styles.texto}>
          Anote acontecimentos importantes sobre seu dia aqui!!
        </Text>
      </View>

      <View style={styles.areaTexto}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua anotação aqui..."
          multiline={true}
        />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },

  titulo: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  textTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
  },

  contTexto: {
    marginBottom: 20,
  },

  texto: {
    fontSize: 16,
    textAlign: 'center',
  },

  areaTexto: {
    alignItems: 'center',
  },

  input: {
    width: '100%',
    height: 200,
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
});