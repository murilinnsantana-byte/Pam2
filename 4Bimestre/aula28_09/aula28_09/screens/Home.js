import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { estilos } from './Estilo';
import { obterListaItens } from './Funcoes';

export default function Home() {
  const dados = obterListaItens();

  const renderizarItem = ({ item }) => (
    <View style={estilos.itemCard}>
      <Text style={estilos.tagCategoria}>{item.categoria.toUpperCase()}</Text>
      <Text style={estilos.itemTitulo}>{item.titulo}</Text>
      <Text style={estilos.itemDescricao}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.titulo}>Recursos e Funções do Projeto</Text>
        <Text style={estilos.subtitulo}>Conceitos aplicados neste aplicativo React Native</Text>
      </View>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={renderizarItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}