import { StyleSheet } from 'react-native';

export const estilosGerais = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // Fundo azul escuro moderno
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  headerBanner: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
  },
  brandSubtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#818CF8', // Roxo Neon
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  tagCategoria: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 8,
  },
  textoCategoria: {
    color: '#818CF8',
    fontSize: 12,
    fontWeight: '600',
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: 6,
  },
  cardPreco: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#38BDF8', // Azul Neon
    marginBottom: 12,
  },
  botaoDetalhes: {
    backgroundColor: '#6366F1', // Roxo de destaque
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotaoDetalhes: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});