import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Título */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
            <p>Terceiro ano do Ensino Médio integrado com o Ensino Técnico de Informática para Internet</p>
        </Text>
      </View>

  

      {/* Subtítulo */}
      <View style={styles.courseContainer}>
        <Text style={styles.subtitle}>
          Informática para Internet
        </Text>
      </View>

    

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#7c26c2',
    justifyContent: 'center',
    alignItems: 'center',
  },


  title: {
    color: '#ebe8e8',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  subtitle: {
    color: '#ebe8e8',
    fontSize: 24,
    textAlign: 'center',
  },


});