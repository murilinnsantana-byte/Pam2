import { StyleSheet } from 'react-native';

export const loginEstilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#0F172A',
  },
  logoArea: {
    alignItems: 'center',
    marginBottom: 40,
  },
  brandBadge: {
    color: '#818CF8',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 4,
    marginBottom: 6,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  subtitulo: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 6,
  },
  input: {
    height: 52,
    backgroundColor: '#1E293B',
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 15,
    color: '#F8FAFC',
  },
  botao: {
    backgroundColor: '#6366F1',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});