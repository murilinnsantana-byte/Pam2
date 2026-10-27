import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from './funcoes';

export default function Home({ route, navigation }) {
  const usuarioNome = route?.params?.usuarioNome || 'Torcedor';
  const [abaAtiva, setAbaAtiva] = useState('geral');
  const [palpites, setPalpites] = useState([]);
  const [idEditando, setIdEditando] = useState(null);
  const [novoPalpite, setNovoPalpite] = useState('');

  // READ: Buscar dados do Firebase
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

  // UPDATE: Atualizar palpites no Firebase
  const handleAtualizar = async (id) => {
    if (!novoPalpite.trim()) {
      Alert.alert('Atenção', 'Digite a alteração do seu palpite.');
      return;
    }
    try {
      const docRef = doc(db, 'palpites', id);
      await updateDoc(docRef, { palpite: novoPalpite });
      Alert.alert('Sucesso', 'Palpite atualizado com sucesso no banco!');
      setIdEditando(null);
      setNovoPalpite('');
      buscarPalpites();
    } catch (error) {
      Alert.alert('Erro ao atualizar', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Profissional */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.badgeText}>PORTAL INTERATIVO</Text>
          <Text style={styles.userGreeting}>Olá, {usuarioNome} 👋</Text>
        </View>
        <Text style={styles.tituloHeader}>COPA DO MUNDO</Text>
        <Text style={styles.subtituloHeader}>A Enciclopédia Definitiva do Futebol Mundial</Text>
      </View>

      {/* Navegação por Abas */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuAbasContainer} contentContainerStyle={styles.menuAbasContent}>
        <TouchableOpacity style={[styles.btnAba, abaAtiva === 'geral' && styles.btnAbaAtiva]} onPress={() => setAbaAtiva('geral')}>
          <Text style={[styles.textoAba, abaAtiva === 'geral' && styles.textoAbaAtiva]}>📍 Visão Geral</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnAba, abaAtiva === 'historia' && styles.btnAbaAtiva]} onPress={() => setAbaAtiva('historia')}>
          <Text style={[styles.textoAba, abaAtiva === 'historia' && styles.textoAbaAtiva]}>📖 Origem & Jules Rimet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnAba, abaAtiva === 'campeoes' && styles.btnAbaAtiva]} onPress={() => setAbaAtiva('campeoes')}>
          <Text style={[styles.textoAba, abaAtiva === 'campeoes' && styles.textoAbaAtiva]}>🏆 Campeões & Recordes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnAba, abaAtiva === 'curiosidades' && styles.btnAbaAtiva]} onPress={() => setAbaAtiva('curiosidades')}>
          <Text style={[styles.textoAba, abaAtiva === 'curiosidades' && styles.textoAbaAtiva]}>💡 Mitos & Curiosidades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnAba, abaAtiva === 'palpites' && styles.btnAbaAtiva]} onPress={() => setAbaAtiva('palpites')}>
          <Text style={[styles.textoAba, abaAtiva === 'palpites' && styles.textoAbaAtiva]}>⚽ Painel do Torcedor (CRUD)</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Conteúdo Dinâmico */}
      <ScrollView style={styles.conteudoScroll} showsVerticalScrollIndicator={false}>
        {abaAtiva === 'geral' && (
          <View style={styles.secao}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000' }} 
              style={styles.imagemHero} 
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>🌍 A Maior Competição Esportiva da Terra</Text>
              <Text style={styles.cardTexto}>
                Organizada pela FIFA a cada 4 anos, a Copa do Mundo mobiliza bilhões de torcedores em todos os continentes. As seleções enfrentam um ciclo rigoroso de eliminatórias até alcançarem a grande fase final.
              </Text>
            </View>

            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000' }} 
              style={styles.imagemBanner} 
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>🏟️ Estrutura e Formato do Torneio</Text>
              <Text style={styles.cardTexto}>
                A disputa envolve uma Fase de Grupos seguida do sistema de mata-mata direto: Oitavas de Final, Quartas de Final, Semifinais e a Decisiva Grande Final pelo troféu banhado a ouro de 18 quilates.
              </Text>
            </View>
          </View>
        )}

        {abaAtiva === 'historia' && (
          <View style={styles.secao}>
            <Image 
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jules_Rimet.jpg/640px-Jules_Rimet.jpg' }} 
              style={styles.imagemBannerAjustada} 
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>👤 Quem criou a Copa do Mundo?</Text>
              <Text style={styles.cardTexto}>
                O advogado e dirigente esportivo francês <Text style={styles.destaque}>Jules Rimet</Text>, assumindo a presidência da FIFA em 1921, superou crises políticas para oficializar o primeiro torneio mundial de seleções masculinas em 1930.
              </Text>
            </View>

            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000' }} 
              style={styles.imagemBanner} 
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>🇺🇾 O Primeiro Capítulo: Uruguai 1930</Text>
              <Text style={styles.cardTexto}>
                Sem fase eliminatória, 13 nações aceitaram o convite para jogar no Uruguai. A seleção anfitriã tornou-se a primeira campeã ao derrotar a Argentina por 4 a 2 no lendário Estádio Centenário.
              </Text>
            </View>
          </View>
        )}

        {abaAtiva === 'campeoes' && (
          <View style={styles.secao}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1000' }} 
              style={styles.imagemHero} 
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>🥇 Galeria dos Campeões do Mundo</Text>
              <Text style={styles.cardTexto}>
                🇧🇷 <Text style={styles.destaque}>Brasil:</Text> 5 Títulos (1958, 1962, 1970, 1994, 2002){'\n'}
                🇩🇪 <Text style={styles.destaque}>Alemanha:</Text> 4 Títulos (1954, 1974, 1990, 2014){'\n'}
                🇮🇹 <Text style={styles.destaque}>Itália:</Text> 4 Títulos (1934, 1938, 1982, 2006){'\n'}
                🇦🇷 <Text style={styles.destaque}>Argentina:</Text> 3 Títulos (1978, 1986, 2022){'\n'}
                🇫🇷 <Text style={styles.destaque}>França:</Text> 2 Títulos (1998, 2018){'\n'}
                🇺🇾 <Text style={styles.destaque}>Uruguai:</Text> 2 Títulos (1930, 1950)
              </Text>
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>⚽ Os Maiores Artilheiros</Text>
              <Text style={styles.cardTexto}>
                1. <Text style={styles.destaque}>Miroslav Klose (Alemanha):</Text> 16 golos{'\n'}
                2. <Text style={styles.destaque}>Ronaldo Nazário (Brasil):</Text> 15 golos{'\n'}
                3. <Text style={styles.destaque}>Gerd Müller (Alemanha):</Text> 14 golos{'\n'}
                4. <Text style={styles.destaque}>Lionel Messi (Argentina):</Text> 13 golos
              </Text>
            </View>
          </View>
        )}

        {abaAtiva === 'curiosidades' && (
          <View style={styles.secao}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000' }} 
              style={styles.imagemHero} 
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>👑 O Rei Pelé e Seus Tri-Campeonatos</Text>
              <Text style={styles.cardTexto}>
                Edson Arantes do Nascimento, o <Text style={styles.destaque}>Pelé</Text>, permanece como o único atleta na história do futebol a vencer 3 edições de Copa do Mundo (1958, 1962 e 1970).
              </Text>
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>🕵️ O Misterioso Caso da Taça Jules Rimet</Text>
              <Text style={styles.cardTexto}>
                Após a conquista definitiva pelo Brasil em 1970, a taça foi exposta na sede da CBF no Rio de Janeiro. Em 1983, a peça folheada a ouro foi roubada e permanece desaparecida até hoje.
              </Text>
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.cardTitulo}>⚡ O Golo Mais Rápido de Todos os Tempos</Text>
              <Text style={styles.cardTexto}>
                Na disputa pelo 3º lugar na Copa de 2002, o atacante turco <Text style={styles.destaque}>Hakan Şükür</Text> balançou a rede contra a Coreia do Sul em incríveis <Text style={styles.destaque}>11 segundos</Text>.
              </Text>
            </View>
          </View>
        )}

        {abaAtiva === 'palpites' && (
          <View style={styles.secao}>
            <View style={styles.cardTopAction}>
              <Text style={styles.cardTitulo}>📋 Palpites da Comunidade (CRUD)</Text>
              <TouchableOpacity style={styles.btnNavegarCadastro} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.btnNavegarTexto}>+ NOVO PALPITE</Text>
              </TouchableOpacity>
            </View>

            {palpites.length === 0 ? (
              <Text style={styles.textoVazio}>Nenhum palpite gravado até o momento. Registre o seu!</Text>
            ) : (
              palpites.map((item) => (
                <View key={item.id} style={styles.cardPalpite}>
                  <Text style={styles.nomeTorcedor}>{item.nome}</Text>
                  {item.selecao && <Text style={styles.subTorcedor}>Seleção Favorita: {item.selecao}</Text>}
                  <Text style={styles.textoPalpite}>Palpite do Campeão: {item.palpite}</Text>

                  {idEditando === item.id ? (
                    <View style={styles.boxEditar}>
                      <TextInput
                        style={styles.inputEdit}
                        placeholder="Novo Palpite"
                        placeholderTextColor="#536357"
                        value={novoPalpite}
                        onChangeText={setNovoPalpite}
                      />
                      <TouchableOpacity style={styles.btnSalvar} onPress={() => handleAtualizar(item.id)}>
                        <Text style={styles.btnSalvarTexto}>SALVAR ALTERAÇÃO</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity style={styles.btnEditar} onPress={() => { setIdEditando(item.id); setNovoPalpite(item.palpite); }}>
                      <Text style={styles.btnEditarTexto}>✏️ Editar este Palpite</Text>
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
  container: { flex: 1, backgroundColor: '#0B0F12' },
  header: { paddingTop: 45, paddingBottom: 16, paddingHorizontal: 20, backgroundColor: '#131A16', borderBottomWidth: 1, borderBottomColor: '#1F2B24' },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  badgeText: { color: '#00E676', fontSize: 10, fontWeight: '800', letterSpacing: 2 },
  userGreeting: { color: '#FFD700', fontSize: 12, fontWeight: '700' },
  tituloHeader: { fontSize: 26, fontWeight: '900', color: '#FFF', letterSpacing: 1 },
  subtituloHeader: { fontSize: 13, color: '#8F9B94', marginTop: 2 },
  
  menuAbasContainer: { maxHeight: 55, backgroundColor: '#131A16', borderBottomWidth: 1, borderBottomColor: '#1F2B24' },
  menuAbasContent: { paddingHorizontal: 16, alignItems: 'center' },
  btnAba: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, marginRight: 8, backgroundColor: '#1A241E' },
  btnAbaAtiva: { backgroundColor: '#00E676' },
  textoAba: { color: '#A0B2A6', fontWeight: '600', fontSize: 13 },
  textoAbaAtiva: { color: '#0B0F12', fontWeight: '800' },

  conteudoScroll: { flex: 1, padding: 20 },
  secao: { paddingBottom: 40 },
  
  imagemHero: { width: '100%', height: 200, borderRadius: 14, marginBottom: 16, resizeMode: 'cover' },
  imagemBanner: { width: '100%', height: 160, borderRadius: 14, marginBottom: 16, resizeMode: 'cover' },
  imagemBannerAjustada: { width: '100%', height: 240, borderRadius: 14, marginBottom: 16, resizeMode: 'contain', backgroundColor: '#131A16' },

  cardInfo: { backgroundColor: '#131A16', padding: 20, borderRadius: 14, marginBottom: 16, borderWidth: 1, borderColor: '#1F2B24' },
  cardTitulo: { fontSize: 17, fontWeight: '800', color: '#FFF', marginBottom: 8 },
  cardTexto: { fontSize: 14, color: '#C2D1C7', lineHeight: 22 },
  destaque: { color: '#00E676', fontWeight: '700' },

  cardTopAction: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  btnNavegarCadastro: { backgroundColor: '#00E676', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8 },
  btnNavegarTexto: { color: '#0B0F12', fontWeight: '800', fontSize: 12 },

  cardPalpite: { backgroundColor: '#131A16', padding: 18, borderRadius: 14, marginBottom: 12, borderWidth: 1, borderColor: '#1F2B24' },
  nomeTorcedor: { fontSize: 16, fontWeight: '800', color: '#FFF' },
  subTorcedor: { fontSize: 12, color: '#00E676', marginTop: 2, fontWeight: '600' },
  textoPalpite: { fontSize: 14, color: '#C2D1C7', marginVertical: 8 },
  btnEditar: { marginTop: 6, paddingVertical: 4 },
  btnEditarTexto: { color: '#FFD700', fontSize: 13, fontWeight: '700' },

  boxEditar: { marginTop: 12, backgroundColor: '#1A241E', padding: 12, borderRadius: 10 },
  inputEdit: { backgroundColor: '#0B0F12', borderWidth: 1, borderColor: '#26362C', color: '#FFF', padding: 10, borderRadius: 8, marginBottom: 10 },
  btnSalvar: { backgroundColor: '#00E676', padding: 12, borderRadius: 8, alignItems: 'center' },
  btnSalvarTexto: { color: '#0B0F12', fontWeight: '800', fontSize: 12 },
  textoVazio: { color: '#6A7B70', textAlign: 'center', marginTop: 30, fontSize: 14 }
});