import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const filmes = [
    {
      id: '1',
      nome: 'Interestelar',
      genero: 'Ficção Científica',
      nota: '9.0',
      emoji: '🚀',
    },
    {
      id: '2',
      nome: 'O Rei Leão',
      genero: 'Animação',
      nota: '8.5',
      emoji: '🦁',
    },
    {
      id: '3',
      nome: 'Vingadores: Ultimato',
      genero: 'Ação',
      nota: '8.4',
      emoji: '🦸',
    },
    {
      id: '4',
      nome: 'Harry Potter',
      genero: 'Fantasia',
      nota: '8.1',
      emoji: '🪄',
    },
    {
      id: '5',
      nome: 'Toy Story',
      genero: 'Animação',
      nota: '8.3',
      emoji: '🤠',
    },
    {
      id: '6',
      nome: 'Jurassic Park',
      genero: 'Aventura',
      nota: '8.2',
      emoji: '🦖',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.emoji}>{item.emoji}</Text>

      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>

        <Text style={styles.genero}>
          {item.genero}
        </Text>

        <Text style={styles.nota}>
          ⭐ {item.nota}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>🎬 Meus Filmes</Text>

        <Text style={styles.subtitulo}>
          Confira alguns dos meus filmes favoritos
        </Text>
      </View>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10131C',
  },

  header: {
    padding: 25,
    paddingBottom: 15,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 16,
    color: '#A9AFBF',
  },

  lista: {
    padding: 20,
    paddingTop: 5,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B2030',
    padding: 18,
    marginBottom: 14,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    elevation: 5,
  },

  emoji: {
    fontSize: 42,
    marginRight: 18,
  },

  info: {
    flex: 1,
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  genero: {
    color: '#A9AFBF',
    fontSize: 14,
    marginBottom: 7,
  },

  nota: {
    color: '#FFD166',
    fontSize: 15,
    fontWeight: 'bold',
  },
});