// App.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  Keyboard,
} from 'react-native';
import { styles } from './styles/styles';
import { buscarSerie } from './services/apiSeries';

export default function App() {
  const [busca, setBusca] = useState('');
  const [serie, setSerie] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  async function handlePesquisar() {
    Keyboard.dismiss();
    setErro('');
    setSerie(null);
    setCarregando(true);

    try {
      const resultado = await buscarSerie(busca);
      setSerie(resultado);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.titulo}>Catálogo de Séries</Text>
      <Text style={styles.subtitulo}>Busque informações via TVMaze API</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Breaking Bad, Stranger Things, Dark..."
        placeholderTextColor="#64748B"
        value={busca}
        onChangeText={setBusca}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={handlePesquisar}
        disabled={carregando}
      >
        <Text style={styles.textoBotao}>
          {carregando ? 'Buscando...' : 'Pesquisar Série'}
        </Text>
      </TouchableOpacity>

      {carregando && <ActivityIndicator size="large" color="#E11D48" />}

      {erro !== '' && <Text style={styles.erroTexto}>{erro}</Text>}

      {serie && (
        <View style={styles.card}>
          <View style={styles.cabecalhoCard}>
            {serie.poster && (
              <Image source={{ uri: serie.poster }} style={styles.poster} />
            )}

            <View style={styles.infoPrincipal}>
              <Text style={styles.nomeSerie}>{serie.nome}</Text>

              <Text style={styles.detalheTexto}>
                <Text style={styles.destaque}>Nota: </Text>
                {serie.nota}
              </Text>

              <Text style={styles.detalheTexto}>
                <Text style={styles.destaque}>Gênero: </Text>
                {serie.generos}
              </Text>

              <Text style={styles.detalheTexto}>
                <Text style={styles.destaque}>Status: </Text>
                {serie.status}
              </Text>

              <Text style={styles.detalheTexto}>
                <Text style={styles.destaque}>Estreia: </Text>
                {serie.estreia}
              </Text>
            </View>
          </View>

          <Text style={styles.tituloSinopse}>Sinopse</Text>
          <Text style={styles.sinopseTexto}>{serie.sinopse}</Text>
        </View>
      )}
    </ScrollView>
  );
}