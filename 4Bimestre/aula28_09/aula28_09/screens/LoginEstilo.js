import { StyleSheet } from 'react-native';

export const loginEstilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#2a2a3d',
    width: '100%',
    maxWidth: 400,
    padding: 30,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logoTexto: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6c5ce7',
  },
  subtitulo: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 4,
  },
  label: {
    fontSize: 14,
    color: '#dcdde1',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#1e1e2e',
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#44445a',
    padding: 14,
    borderRadius: 10,
    marginBottom: 18,
    fontSize: 15,
  },
  botao: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});