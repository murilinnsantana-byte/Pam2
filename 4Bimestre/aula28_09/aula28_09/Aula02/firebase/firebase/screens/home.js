import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from './funcoes';

export default function Home({ navigation }) {
  const [abaAtiva, setAbaAtiva] = useState('geral');
  const [palpites, setPalpites] = useState([]);
  const [idEditando, setIdEditando] = useState(null);
  const [novoPalpite, setNovoPalpite] = useState('');

  const buscarPalpites = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'palpites'));
      const lista = [];
      querySnapshot.forEach((documento) => {
        lista.push({ id: documento.id, ...documento.data() });
      });
      setPalpites(lista);
    } catch (error) {
      console.error("Erro ao buscar palpites: ", error);
    }
  };

  useEffect(() => {
    buscarPalpites();
  }, []);

  const handleAtualizar = async (id) => {
    if (!novoPalpite) {
      Alert.alert('Atenção', 'Digite o novo palpite.');
      return;
    }
    try {
      const docRef = doc(db, 'palpites', id);
      await updateDoc(docRef, { palpite: novoPalpite });
      Alert.alert('Sucesso', 'Palpite atualizado com sucesso!');
      setIdEditando(null);
      setNovoPalpite('');
      buscarPalpites();
    } catch (error) {
      Alert.alert('Erro ao atualizar', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.badgeText}>PORTAL OFICIAL</Text>
        <Text style={styles.tituloHeader}>COPA DO MUNDO</Text>
        <Text style={styles.subtituloHeader}>A História do Maior Espetáculo da Terra</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuAbasContainer} contentContainerStyle={styles.menuAbasContent}>
        <TouchableOpacity style={[styles.btnAba, abaAtiva === 'geral' && styles.btnAbaAtiva]} onPress={() => setAbaAtiva('geral')}>
          <Text style={[styles.textoAba, abaAtiva === 'geral' && styles.textoAbaAtiva]}>📍 Geral</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnAba, abaAtiva === 'historia' && styles.btnAbaAtiva]} onPress={() => setAbaAtiva('historia')}>
          <Text style={[styles.textoAba, abaAtiva === 'historia' && styles.textoAbaAtiva]}>📖 História</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnAba, abaAtiva === 'campeoes' && styles.btnAbaAtiva]} onPress={() => setAbaAtiva('campeoes')}>
          <Text style={[styles.textoAba, abaAtiva === 'campeoes' && styles.textoAbaAtiva]}>🏆 Campeões</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnAba, abaAtiva === 'curiosidades' && styles.btnAbaAtiva]} onPress={() => setAbaAtiva('curiosidades')}>
          <Text style={[styles.textoAba, abaAtiva === 'curiosidades' && styles.textoAbaAtiva]}>💡 Curiosidades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnAba, abaAtiva === 'palpites' && styles.btnAbaAtiva]} onPress={() => setAbaAtiva('palpites')}>
          <Text style={[styles.textoAba, abaAtiva === 'palpites' && styles.textoAbaAtiva]}>⚽ Palpites (CRUD)</Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView style={styles.conteudoScroll} showsVerticalScrollIndicator={false}>
        {abaAtiva === 'geral' && (
          <View style={styles.secao}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800' }} 
              style={styles.imagemBanner} 
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>🌍 Como funciona a Competição?</Text>
              <Text style={styles.cardTexto}>
                A Copa do Mundo da FIFA é o torneio internacional de futebol mais prestigiado do planeta. Ocorre a cada 4 anos, reunindo as seleções que se qualificam através das eliminatórias continentais.
              </Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>🏟️ Formato do Torneio</Text>
              <Text style={styles.cardTexto}>
                O torneio conta com uma Fase de Grupos seguida por mata-mata direto (Oitavas, Quartas, Semifinais e a Grande Final). Apenas uma seleção ergue o cobiçado troféu de ouro de 18 quilates!
              </Text>
            </View>
          </View>
        )}

        {abaAtiva === 'historia' && (
          <View style={styles.secao}>
            <Image 
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jules_Rimet.jpg/640px-Jules_Rimet.jpg' }} 
              style={styles.imagemBanner} 
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>👤 Quem criou a Copa do Mundo?</Text>
              <Text style={styles.cardTexto}>
                A Copa foi idealizada pelo francês <Text style={styles.destaque}>Jules Rimet</Text>, ex-presidente da FIFA. Ele trabalhou durante a década de 1920 para unir as nações através do esporte, resultando na primeira edição oficial em 1930.
              </Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>🇺🇾 A Primeira Edição (1930)</Text>
              <Text style={styles.cardTexto}>
                Aconteceu no Uruguai com apenas 13 seleções participantes. A seleção anfitriã (Uruguai) consagrou-se a primeira campeã mundial ao vencer a Argentina por 4 a 2 no Estádio Centenário.
              </Text>
            </View>
          </View>
        )}

        {abaAtiva === 'campeoes' && (
          <View style={styles.secao}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800' }} 
              style={styles.imagemBanner} 
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>🥇 Maiores Campeões da História</Text>
              <Text style={styles.cardTexto}>
                • <Text style={styles.destaque}>Brasil:</Text> 5 Títulos (1958, 1962, 1970, 1994, 2002){'\n'}
                • <Text style={styles.destaque}>Alemanha:</Text> 4 Títulos (1954, 1974, 1990, 2014){'\n'}
                • <Text style={styles.destaque}>Itália:</Text> 4 Títulos (1934, 1938, 1982, 2006){'\n'}
                • <Text style={styles.destaque}>Argentina:</Text> 3 Títulos (1978, 1986, 2022)
              </Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>⚽ Maior Artilheiro de Todos os Tempos</Text>
              <Text style={styles.cardTexto}>
                O alemão <Text style={styles.destaque}>Miroslav Klose</Text> lidera o ranking de golos marcados em Copas com <Text style={styles.destaque}>16 golos</Text> em 4 edições (2002 a 2014), seguido pelo brasileiro Ronaldo Nazário com 15 golos.
              </Text>
            </View>
          </View>
        )}

        {abaAtiva === 'curiosidades' && (
          <View style={styles.secao}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800' }} 
              style={styles.imagemBanner} 
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>🏆 O Misterioso Roubo da Taça Jules Rimet</Text>
              <Text style={styles.cardTexto}>
                O Brasil ganhou o direito de posse definitiva da Taça Jules Rimet após o tricampeonato em 1970. Porém, em 1983, a taça foi roubada no Rio de Janeiro e supostamente derretida.
              </Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>👑 O Rei Pelé</Text>
              <Text style={styles.cardTexto}>
                Pelé é o único jogador na história do futebol a conquistar <Text style={styles.destaque}>3 Copas do Mundo</Text> como jogador (1958, 1962 e 1970).
              </Text>
            </View>
          </View>
        )}

        {abaAtiva === 'palpites' && (
          <View style={styles.secao}>
            <View style={styles.cardTopAction}>
              <Text style={styles.cardTitulo}>📋 Registros dos Torcedores</Text>
              <TouchableOpacity style={styles.btnNavegarCadastro} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.btnNavegarTexto}>+ Criar Novo Cadastro</Text>
              </TouchableOpacity>
            </View>

            {palpites.length === 0 ? (
              <Text style={styles.textoVazio}>Nenhum palpite encontrado. Cadastre o primeiro!</Text>
            ) : (
              palpites.map((item) => (
                <View key={item.id} style={styles.cardPalpite}>
                  <Text style={styles.nomeTorcedor}>{item.nome}</Text>
                  {item.selecao && <Text style={styles.subTorcedor}>Seleção: {item.selecao}</Text>}
                  <Text style={styles.textoPalpite}>Palpite: {item.palpite}</Text>

                  {idEditando === item.id ? (
                    <View style={styles.boxEditar}>
                      <TextInput
                        style={styles.inputEdit}
                        placeholder="Novo palpite"
                        placeholderTextColor="#888"
                        value={novoPalpite}
                        onChangeText={setNovoPalpite}
                      />
                      <TouchableOpacity style={styles.btnSalvar} onPress={() => handleAtualizar(item.id)}>
                        <Text style={styles.btnSalvarTexto}>Salvar Alteração</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity style={styles.btnEditar} onPress={() => { setIdEditando(item.id); setNovoPalpite(item.palpite); }}>
                      <Text style={styles.btnEditarTexto}>✏️ Editar Palpite</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0F0D' },
  header: { paddingTop: 40, paddingBottom: 15, paddingHorizontal: 20, backgroundColor: '#121A15', borderBottomWidth: 1, borderBottomColor: '#1E2D24' },
  badgeText: { color: '#00E676', fontSize: 11, fontWeight: '700', letterSpacing: 2, marginBottom: 4 },
  tituloHeader: { fontSize: 26, fontWeight: '800', color: '#FFF', letterSpacing: 1 },
  subtituloHeader: { fontSize: 13, color: '#A0B2A6', marginTop: 2 },
  
  menuAbasContainer: { maxHeight: 55, backgroundColor: '#121A15', borderBottomWidth: 1, borderBottomColor: '#1E2D24' },
  menuAbasContent: { paddingHorizontal: 15, alignItems: 'center' },
  btnAba: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, marginRight: 8, backgroundColor: '#1A261E' },
  btnAbaAtiva: { backgroundColor: '#00E676' },
  textoAba: { color: '#A0B2A6', fontWeight: '600', fontSize: 13 },
  textoAbaAtiva: { color: '#0A0F0D', fontWeight: '700' },

  conteudoScroll: { flex: 1, padding: 20 },
  secao: { paddingBottom: 30 },
  
  imagemBanner: { width: '100%', height: 180, borderRadius: 12, marginBottom: 15, resizeMode: 'cover' },

  cardInfo: { backgroundColor: '#141E18', padding: 18, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: '#1E2D24' },
  cardTitulo: { fontSize: 17, fontWeight: '700', color: '#FFF', marginBottom: 8 },
  cardTexto: { fontSize: 14, color: '#C2D1C7', lineHeight: 22 },
  destaque: { color: '#00E676', fontWeight: '700' },

  cardTopAction: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  btnNavegarCadastro: { backgroundColor: '#00E676', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  btnNavegarTexto: { color: '#0A0F0D', fontWeight: '700', fontSize: 12 },

  cardPalpite: { backgroundColor: '#141E18', padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#1E2D24' },
  nomeTorcedor: { fontSize: 16, fontWeight: '700', color: '#FFF' },
  subTorcedor: { fontSize: 12, color: '#00E676', marginTop: 2 },
  textoPalpite: { fontSize: 14, color: '#C2D1C7', marginVertical: 8 },
  btnEditar: { marginTop: 5, paddingVertical: 6, alignItems: 'flex-start' },
  btnEditarTexto: { color: '#FFD700', fontSize: 13, fontWeight: '600' },

  boxEditar: { marginTop: 10, backgroundColor: '#1A261E', padding: 10, borderRadius: 8 },
  inputEdit: { backgroundColor: '#121A15', borderWidth: 1, borderColor: '#2A3D30', color: '#FFF', padding: 10, borderRadius: 6, marginBottom: 8 },
  btnSalvar: { backgroundColor: '#00E676', padding: 10, borderRadius: 6, alignItems: 'center' },
  btnSalvarTexto: { color: '#0A0F0D', fontWeight: '700', fontSize: 13 },
  textoVazio: { color: '#888', textAlign: 'center', marginTop: 20 }
});