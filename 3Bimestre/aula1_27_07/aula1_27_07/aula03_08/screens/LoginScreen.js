import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  Alert 
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ocultarSenha, setOcultarSenha] = useState(true);

  const handleLogin = () => {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos para entrar.');
      return;
    }
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>NIKE</Text>
        <Text style={styles.subLogo}>JUST DO IT.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Acesse sua conta</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="usuario@nike.com"
            placeholderTextColor="#9CA3AF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="••••••••"
              placeholderTextColor="#9CA3AF"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={ocultarSenha}
            />
            <TouchableOpacity 
              onPress={() => setOcultarSenha(!ocultarSenha)}
              style={styles.eyeButton}
            >
              <Text style={styles.eyeText}>{ocultarSenha ? 'Exibir' : 'Ocultar'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
          <Text style={styles.buttonPrimaryText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate('Teste')}
        >
          <Text style={styles.buttonSecondaryText}>CALCULADOR NIKE FIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoText: {
    fontSize: 42,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 4,
    fontStyle: 'italic',
  },
  subLogo: {
    fontSize: 12,
    fontWeight: '700',
    color: '#E50914',
    letterSpacing: 3,
    marginTop: -4,
  },
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9CA3AF',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  input: {
    height: 48,
    backgroundColor: '#262626',
    borderRadius: 6,
    paddingHorizontal: 12,
    color: '#FFFFFF',
    fontSize: 15,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeButton: {
    position: 'absolute',
    right: 12,
  },
  eyeText: {
    color: '#E50914',
    fontSize: 12,
    fontWeight: '700',
  },
  buttonPrimary: {
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonPrimaryText: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },
  buttonSecondary: {
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E50914',
  },
  buttonSecondaryText: {
    color: '#E50914',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
});