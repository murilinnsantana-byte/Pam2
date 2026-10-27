import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function DetalhesScreen({ route }) {
  const { produto } = route.params;
  const [tamanho, setTamanho] = useState('G');
  const [quantidade, setQuantidade] = useState(1);

  // FUNÇÃO 1: Calcular desconto de 12% no Pix
  const calcularPix = (valor, qtd) => {
    const total = valor * qtd;
    return total * 0.88;
  };

  // FUNÇÃO 2: Calcular valor das parcelas em 4x sem juros
  const calcularParcelamento = (valor, qtd) => {
    const total = valor * qtd;
    return (total / 4).toFixed(2);
  };

  // FUNÇÃO 3: Processar o pedido
  const handleComprar = () => {
    Alert.alert(
      'Manto Reservado!',
      `Você selecionou ${quantidade}x ${produto.nome} (Tamanho: ${tamanho}).\nTotal Pix: R$ ${calcularPix(produto.preco, quantidade).toFixed(2)}`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: produto.imagem }} style={styles.bannerImage} />

      <View style={styles.content}>
        <Text style={styles.tagSelecao}>{produto.selecao}</Text>
        <Text style={styles.titulo}>{produto.nome}</Text>
        <Text style={styles.descricao}>{produto.descricao}</Text>

        {/* Seleção de Tamanho */}
        <Text style={styles.sectionLabel}>Escolha o Tamanho:</Text>
        <View style={styles.tamanhosRow}>
          {['P', 'M', 'G', 'GG'].map((t) => (
            <TouchableOpacity 
              key={t}
              style={[styles.btnTamanho, tamanho === t && styles.btnTamanhoAtivo]}
              onPress={() => setTamanho(t)}
            >
              <Text style={[styles.textoTamanho, tamanho === t && styles.textoTamanhoAtivo]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Seleção de Quantidade */}
        <View style={styles.qtdRow}>
          <Text style={styles.sectionLabel}>Quantidade:</Text>
          <View style={styles.qtdControls}>
            <TouchableOpacity 
              style={styles.qtdBtn} 
              onPress={() => setQuantidade(Math.max(1, quantidade - 1))}
            >
              <Text style={styles.qtdBtnTexto}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtdTexto}>{quantidade}</Text>
            <TouchableOpacity 
              style={styles.qtdBtn} 
              onPress={() => setQuantidade(quantidade + 1)}
            >
              <Text style={styles.qtdBtnTexto}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Box de Preços com Funções */}
        <View style={styles.precoCard}>
          <Text style={styles.precoPixLabel}>Preço no Pix (12% OFF):</Text>
          <Text style={styles.precoPixValor}>
            R$ {calcularPix(produto.preco, quantidade).toFixed(2)}
          </Text>
          <Text style={styles.precoParcela}>
            Ou 4x de R$ {calcularParcelamento(produto.preco, quantidade)} sem juros
          </Text>
        </View>

        <TouchableOpacity style={styles.botaoComprar} onPress={handleComprar}>
          <Text style={styles.textoBotaoComprar}>GARANTIR MEU MANTO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  bannerImage: { width: '100%', height: 260, resizeMode: 'cover' },
  content: { padding: 20 },
  tagSelecao: { color: '#818CF8', fontSize: 13, fontWeight: '700', textTransform: 'uppercase', marginBottom: 4 },
  titulo: { color: '#F8FAFC', fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  descricao: { color: '#94A3B8', fontSize: 14, lineHeight: 22, marginBottom: 20 },
  sectionLabel: { color: '#F8FAFC', fontSize: 14, fontWeight: '700', marginBottom: 10 },
  tamanhosRow: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  btnTamanho: { flex: 1, backgroundColor: '#1E293B', paddingVertical: 12, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#334155' },
  btnTamanhoAtivo: { backgroundColor: '#6366F1', borderColor: '#818CF8' },
  textoTamanho: { color: '#94A3B8', fontWeight: 'bold' },
  textoTamanhoAtivo: { color: '#FFF' },
  qtdRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  qtdControls: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E293B', borderRadius: 8, borderWidth: 1, borderColor: '#334155' },
  qtdBtn: { paddingHorizontal: 16, paddingVertical: 8 },
  qtdBtnTexto: { color: '#38BDF8', fontSize: 18, fontWeight: 'bold' },
  qtdTexto: { color: '#FFF', fontSize: 16, fontWeight: 'bold', paddingHorizontal: 12 },
  precoCard: { backgroundColor: '#1E293B', padding: 18, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#334155' },
  precoPixLabel: { color: '#818CF8', fontSize: 12, fontWeight: '700' },
  precoPixValor: { color: '#38BDF8', fontSize: 26, fontWeight: 'bold', marginVertical: 4 },
  precoParcela: { color: '#CBD5E1', fontSize: 13 },
  botaoComprar: { backgroundColor: '#6366F1', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginBottom: 30 },
  textoBotaoComprar: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});