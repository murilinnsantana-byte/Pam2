import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13131e',
    padding: 20,
  },
  cabecalho: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitulo: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 4,
  },
  itemCard: {
    backgroundColor: '#1e1e2e',
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#6c5ce7',
  },
  tagCategoria: {
    alignSelf: 'flex-start',
    backgroundColor: '#342b68',
    color: '#a29bfe',
    fontSize: 11,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
  },
  itemTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },
  itemDescricao: {
    fontSize: 14,
    color: '#b2bec3',
    lineHeight: 20,
  },
});