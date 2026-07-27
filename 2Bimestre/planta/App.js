import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
  <ScrollView style={styles.fundo}>
    <View>
      <Text>Catalogo de Plantas</Text> 
    </View>
    <view>
    <button onPress={}

    </view>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08f53c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
