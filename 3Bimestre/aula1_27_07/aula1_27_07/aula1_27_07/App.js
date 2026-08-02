import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Tentativa de login com:', email, password);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardView}
          >
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' }}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.headerContainer}>
                <Text style={styles.title}>Entre em sua loja de Aplicativos</Text>
                <Text style={styles.subtitle}>Digite seu login para explorar seus apps</Text>
              </View>

              {/* Formulário */}
              <View style={styles.formContainer}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  style={styles.input}
                  placeholder="mariasantos@gmail.com"
                  placeholderTextColor="#A0AEC0"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                  style={styles.input}
                  placeholder="abc@123"
                  placeholderTextColor="#A0AEC0"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />

                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Não tem uma conta? </Text>
                <TouchableOpacity>
                  <Text style={styles.signUpText}>Cadastre-se</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
  },
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 80,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#4A5568',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#2B6CB0',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#3182CE',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#3182CE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  footerText: {
    fontSize: 14,
    color: '#4A5568',
  },
  signUpText: {
    fontSize: 14,
    color: '#2B6CB0',
    fontWeight: '700',
  },
});