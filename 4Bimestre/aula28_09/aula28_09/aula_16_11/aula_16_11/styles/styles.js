// styles/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingHorizontal: 20,
    paddingTop: 55,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F8FAFC',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: '#F8FAFC',
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#E11D48',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  erroTexto: {
    color: '#FCA5A5',
    backgroundColor: '#450A0A',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 14,
  },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: '#334155',
    marginBottom: 30,
  },
  cabecalhoCard: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  poster: {
    width: 110,
    height: 160,
    borderRadius: 8,
    backgroundColor: '#334155',
  },
  infoPrincipal: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  nomeSerie: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 8,
  },
  detalheTexto: {
    fontSize: 14,
    color: '#CBD5E1',
    marginBottom: 5,
  },
  destaque: {
    fontWeight: 'bold',
    color: '#38BDF8',
  },
  tituloSinopse: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 6,
  },
  sinopseTexto: {
    fontSize: 14,
    color: '#94A3B8',
    lineHeight: 20,
    textAlign: 'justify',
  },
});