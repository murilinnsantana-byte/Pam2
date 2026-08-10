import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView, 
  Alert 
} from 'react-native';

const PRODUTOS = [
  { id: '1', nome: 'Nike Air Max Plus', categoria: 'Casual', preco: 'R$ 1.299,99' },
  { id: '2', nome: 'Nike Air Zoom Pegasus', categoria: 'Corrida', preco: 'R$ 899,99' },
  { id: '3', nome: 'Nike LeBron XXI', categoria: 'Basquete', preco: 'R$ 1.599,99' },
  { id: '4', nome: 'Nike Dunk Low', categoria: 'Casual', preco: 'R$ 999,99' },
];

export default function HomeScreen({ navigation }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [carrinho, setCarrinho] = useState([]);

  const produtosFiltrados = categoriaAtiva === 'Todos' 
    ? PRODUTOS 
    : PRODUTOS.filter(item => item.categoria === categoriaAtiva);

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
    Alert.alert('Sucesso', `${item.nome} foi adicionado ao seu carrinho!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.brandTitle}>COLEÇÃO NIKE</Text>
          <Text style={styles.subTitle}>{carrinho.length} itens no carrinho</Text>
        </View>
        <TouchableOpacity 
          style={styles.fitButton}
          onPress={() => navigation.navigate('Teste')}
        >
          <Text style={styles.fitButtonText}>Guia de Tamanhos</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        {['Todos', 'Corrida', 'Casual', 'Basquete'].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.chip, categoriaAtiva === cat && styles.chipActive]}
            onPress={() => setCategoriaAtiva(cat)}
          >
            <Text style={[styles.chipText, categoriaAtiva === cat && styles.chipTextActive]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.productList}>
        {produtosFiltrados.map((item) => (
          <View key={item.id} style={styles.productCard}>
            <View style={styles.cardInfo}>
              <Text style={styles.productCategory}>{item.categoria}</Text>
              <Text style={styles.productName}>{item.nome}</Text>
              <Text style={styles.productPrice}>{item.preco}</Text>
            </View>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => adicionarAoCarrinho(item)}
            >
              <Text style={styles.addButtonText}>+ COMPRAR</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutText}>SAIR DA CONTA</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    padding: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 10,
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    fontStyle: 'italic',
  },
  subTitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  fitButton: {
    backgroundColor: '#E50914',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  fitButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  filterContainer: {
    maxHeight: 40,
    marginBottom: 16,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#262626',
    marginRight: 8,
    height: 36,
  },
  chipActive: {
    backgroundColor: '#FFFFFF',
  },
  chipText: {
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '700',
  },
  chipTextActive: {
    color: '#111111',
  },
  productList: {
    flex: 1,
  },
  productCard: {
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  cardInfo: {
    flex: 1,
  },
  productCategory: {
    fontSize: 10,
    color: '#E50914',
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 2,
  },
  productPrice: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  addButtonText: {
    color: '#111111',
    fontWeight: '900',
    fontSize: 11,
  },
  logoutButton: {
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  logoutText: {
    color: '#DC2626',
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 1,
  },
});