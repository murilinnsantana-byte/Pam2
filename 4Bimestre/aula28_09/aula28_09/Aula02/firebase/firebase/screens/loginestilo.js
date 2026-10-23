import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B4F26', justifyContent: 'center', padding: 20 },
  header: { alignItems: 'center', marginBottom: 30 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#FFD700', textAlign: 'center' },
  subtitulo: { fontSize: 16, color: '#FFF', marginTop: 5 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 12, elevation: 5 },
  input: { borderWidth: 1, borderColor: '#CCC', padding: 12, borderRadius: 8, marginBottom: 15, backgroundColor: '#F9F9F9' },
  botao: { backgroundColor: '#0B4F26', padding: 14, borderRadius: 8, alignItems: 'center' },
  textoBotao: { color: '#FFD700', fontWeight: 'bold', fontSize: 16 }
});