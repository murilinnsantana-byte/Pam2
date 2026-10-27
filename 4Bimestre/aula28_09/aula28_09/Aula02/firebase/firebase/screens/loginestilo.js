import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F12', justifyContent: 'center', padding: 24 },
  header: { alignItems: 'center', marginBottom: 35 },
  logoIcon: { width: 80, height: 80, marginBottom: 12, borderRadius: 40 },
  badge: { color: '#00E676', fontSize: 11, fontWeight: '700', letterSpacing: 2, marginBottom: 6 },
  titulo: { fontSize: 30, fontWeight: '900', color: '#FFF', textAlign: 'center', letterSpacing: 1 },
  subtitulo: { fontSize: 14, color: '#8F9B94', marginTop: 4, textAlign: 'center' },
  card: { backgroundColor: '#131A16', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: '#1F2B24' },
  label: { color: '#A0B2A6', fontSize: 12, fontWeight: '700', textTransform: 'uppercase', marginBottom: 8 },
  input: { backgroundColor: '#0B0F12', borderWidth: 1, borderColor: '#26362C', padding: 14, borderRadius: 10, marginBottom: 20, color: '#FFF', fontSize: 15 },
  botao: { backgroundColor: '#00E676', paddingVertical: 16, borderRadius: 10, alignItems: 'center', marginTop: 5 },
  textoBotao: { color: '#0B0F12', fontWeight: '800', fontSize: 16, letterSpacing: 0.5 }
});