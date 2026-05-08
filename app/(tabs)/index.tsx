import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Título */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          ETEC de Itanhaém
        </Text>
      </View>

      {/* Logo CPS */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/logo-cps.png')}
          style={styles.cpsLogo}
          contentFit="contain"
        />
      </View>

      {/* Subtítulo */}
      <View style={styles.courseContainer}>
        <Text style={styles.subtitle}>
          Informática para Internet
        </Text>
      </View>

      {/* Imagem principal */}
      <Image
        source={require('@/assets/images/etec_itanhaem.png')}
        style={styles.mainImage}
        contentFit="contain"
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#9a9a9a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    marginBottom: 5,
  },

  title: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cpsLogo: {
    width: 220,
    height: 220,
    borderRadius: 20,
  },

  courseContainer: {
    marginTop: 10,
    marginBottom: 20,
  },

  subtitle: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
  },

  mainImage: {
  width: 700,
  height: 150,
  marginTop: 10,
  borderWidth: 3,
  borderColor: '#ffffff',
  borderRadius: 20,

},

});