import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  // Estado para armazenar a descrição da planta clicada
  const [descricao, setDescricao] = useState('Clique em uma planta acima para ler sobre ela...');

  // Dados das plantas: Nome, Descrição e URL da imagem
  const plantas = {
    espada: {
      nome: "Espada-de-São-Jorge",
      desc: "Espada-de-São-Jorge: Extremamente resistente, é ótima para purificar o ar e sobrevive muito bem em locais com pouca luz e regas espaçadas.",
      img: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=200&q=80"
    },
    costela: {
      nome: "Costela-de-Adão",
      desc: "Costela-de-Adão: Famosa por suas folhas grandes e recortadas. Adora ambientes iluminados (sem sol direto) e traz um visual bem tropical.",
      img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200&q=80"
    },
    suculenta: {
      nome: "Suculenta",
      desc: "Suculenta: Pequena e charmosa, armazena água em suas folhas gordinhas. Precisa de bastante sol direto e pouquíssima água.",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&q=80"
    },
    lavanda: {
      nome: "Lavanda",
      desc: "Lavanda: Conhecida por seu aroma relaxante e flores arroxeadas. Gosta de muito sol, solo bem drenado e boa ventilação.",
      img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=200&q=80"
    }
  };

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.titulo}>
        <Text style={styles.textTitulo}>Guia Botânico 🌿</Text>
      </View>

      <View style={styles.contTexto}>
        <Text style={styles.texto}>
          Selecione uma planta abaixo para ver sua descrição detalhada:
        </Text>
      </View>

      {/* Lista de Botões de Plantas com Imagens */}
      <View style={styles.listaPlantas}>
        
        <TouchableOpacity style={styles.cardPlanta} onPress={() => setDescricao(plantas.espada.desc)}>
          <Image source={{ uri: plantas.espada.img }} style={styles.imagemPlanta} />
          <Text style={styles.textBotao}>{plantas.espada.nome}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardPlanta} onPress={() => setDescricao(plantas.costela.desc)}>
          <Image source={{ uri: plantas.costela.img }} style={styles.imagemPlanta} />
          <Text style={styles.textBotao}>{plantas.costela.nome}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardPlanta} onPress={() => setDescricao(plantas.suculenta.desc)}>
          <Image source={{ uri: plantas.suculenta.img }} style={styles.imagemPlanta} />
          <Text style={styles.textBotao}>{plantas.suculenta.nome}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardPlanta} onPress={() => setDescricao(plantas.lavanda.desc)}>
          <Image source={{ uri: plantas.lavanda.img }} style={styles.imagemPlanta} />
          <Text style={styles.textBotao}>{plantas.lavanda.nome}</Text>
        </TouchableOpacity>

      </View>

      {/* Caixa de texto (Text Box) que exibe a descrição */}
      <View style={styles.areaTexto}>
        <View style={styles.caixaDescricao}>
          <Text style={styles.textoDescricao}>
            {descricao}
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f7f6',
  },

  titulo: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 15,
  },

  textTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c5e43',
  },

  contTexto: {
    marginBottom: 20,
  },

  texto: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },

  listaPlantas: {
    width: '100%',
    marginBottom: 25,
  },

  cardPlanta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    // Sombra para dar profundidade aos cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2, 
  },

  imagemPlanta: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },

  textBotao: {
    color: '#2c5e43',
    fontWeight: 'bold',
    fontSize: 16,
  },

  areaTexto: {
    alignItems: 'center',
    marginBottom: 40,
  },

  caixaDescricao: {
    width: '100%',
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#2c5e43',
    borderLeftWidth: 6, // Detalhe verde mais grosso na lateral esquerda
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
  },

  textoDescricao: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    fontStyle: 'italic',
  },
});