import { Link, Stack } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {    
    
    return (
    <>
        <Stack.Screen options={{headerShown: false}}/>


        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} resizeMode='contain' style={styles.img}/>
            <Text style={styles.title}>Loja do Alien</Text>
            <Text>Aqui você encontra tudo que quiser!</Text>
            <Link replace href={"Begin"} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Começar as compras</Text>
                </Pressable>
            </Link>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 12
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "darkblue",
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: '#fff'
  },
  img: {
    height: 200
  }
});
