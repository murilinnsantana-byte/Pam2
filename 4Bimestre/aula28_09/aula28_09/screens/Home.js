import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { estilosGerais } from './Estilo';

// Dados dos produtos
const CAMISAS = [
  {
    id: '1',
    nome: 'Camisa Brasil Home 2026',
    selecao: 'Brasil 🇧🇷',
    preco: 399.90,
    estoque: 12,
    imagem: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800',
    descricao: 'Amarelinha clássica com tecido respirável Dri-FIT e escudo bordado em alta definição.',
  },
  {
    id: '2',
    nome: 'Camisa Argentina Edição 3 Estrelas',
    selecao: 'Argentina 🇦🇷',
    preco: 429.90,
    estoque: 8,
    imagem: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800',
    descricao: 'Manto do tricampeonato mundial com as três estrelas douradas no peito.',
  },
  {
    id: '3',
    nome: 'Camisa Alemanha Away Dark',
    selecao: 'Alemanha 🇩🇪',
    preco: 379.90,
    estoque: 15,
    imagem: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800',
    descricao: 'Design minimalista e moderno em tons escuros com detalhes dourados.',
  },
  {
    id: '4',
    nome: 'Camisa França Navy Gold',
    selecao: 'França 🇫🇷',
    preco: 389.90,
    estoque: 5,
    imagem: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800',
    descricao: 'Elegância azul-marinho com o lendário galo francês no peito.',
  },
  {
    id: '5',
    nome: 'Camisa Itália Azzurra Retro',
    selecao: 'Itália 🇮🇹',
    preco: 359.90,
    estoque: 9,
    imagem: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800',
    descricao: 'Tradição do azul italiano em um corte clássico e atemporal.',
  },
];

export default function HomeScreen({ route, navigation }) {
  const usuarioEmail = route?.params?.usuarioEmail || 'Torcedor';

  // FUNÇÃO DE NAVEGAÇÃO: Envia o objeto da camisa selecionada
  const handleVerDetalhes = (camisa) => {
    navigation.navigate('Detalhes', { produto: camisa });
  };

  // FUNÇÃO RENDERITEM PARA A FLATLIST
  const renderItem = ({ item }) => (
    <View style={estilosGerais.card}>
      <Image source={{ uri: item.imagem }} style={estilosGerais.imagemProduto} />
      
      <View style={estilosGerais.tagCategoria}>
        <Text style={estilosGerais.textoCategoria}>{item.selecao}</Text>
      </View>

      <Text style={estilosGerais.cardTitulo}>{item.nome}</Text>
      <Text style={estilosGerais.cardPreco}>R$ {item.preco.toFixed(2)}</Text>

      <TouchableOpacity 
        style={estilosGerais.botaoDetalhes} 
        onPress={() => handleVerDetalhes(item)}
      >
        <Text style={estilosGerais.textoBotaoDetalhes}>VER DETALHES DO MANTO</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={estilosGerais.container}>
      <View style={estilosGerais.headerBanner}>
        <Text style={estilosGerais.brandSubtitle}>COLEÇÃO COPA DO MUNDO</Text>
        <Text style={estilosGerais.titulo}>Mantos Sagrados</Text>
        <Text style={estilosGerais.subtitulo}>Logado como: {usuarioEmail}</Text>
      </View>

      {/* USO OBRIGATÓRIO DA FLATLIST */}
      <FlatList
        data={CAMISAS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}