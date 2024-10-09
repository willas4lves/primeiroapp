import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <div>
    <View style={styles.container}>
      {/*<p>,h1,span */}
      <Text style={styles.hello}>hello world</Text>
      <Text style={styles.emoji}>🤣</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    color: 'cyan',
    fontWeight: 'bold',
    fontSize: 40,
  },
  emoji: {
    fontSize: 40,
  }
});
