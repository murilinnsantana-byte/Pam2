import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { estilosGerais } from './Estilo';
import { dadosProdutos, exibirAlertaItem } from './Funcoes';

export default function HomeScreen({ route }) {
  const usuarioLogado = route.params?.usuario || 'Membro';

  const renderizarItem = ({ item }) => (
    <View style={estilosGerais.card}>
      <View style={estilosGerais.tagCategoria}>
        <Text style={estilosGerais.textoCategoria}>{item.categoria}</Text>
      </View>
      <Text style={estilosGerais.cardTitulo}>{item.nome}</Text>
      <Text style={estilosGerais.cardPreco}>{item.preco}</Text>
      
      <TouchableOpacity 
        style={estilosGerais.botaoDetalhes} 
        onPress={() => exibirAlertaItem(item)}
      >
        <Text style={estilosGerais.textoBotaoDetalhes}>Ver Detalhes do Item</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={estilosGerais.container}>
      <View style={estilosGerais.headerBanner}>
        <Text style={estilosGerais.brandSubtitle}>URBAN VIBE STORE</Text>
        <Text style={estilosGerais.titulo}>Bem-vindo, {usuarioLogado}!</Text>
      </View>

      <FlatList
        data={dadosProdutos}
        keyExtractor={(item) => item.id}
        renderItem={renderizarItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}