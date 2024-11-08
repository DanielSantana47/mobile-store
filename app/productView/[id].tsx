import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { getProductById } from '../../services/product';

export default function ProductView() {

    const { id } = useLocalSearchParams()

    const product = getProductById(parseInt(id.toString()))
    
    const handleBuyButton = ()=> {
      alert('compra feita!')
    }

    return (
        <>
            <Stack.Screen options={{headerShown: true}}/>
            
                <View style={styles.container}>
                    <Image source={{uri: product?.image}} resizeMode='cover' style={styles.image}/>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.desc}>{product?.description}</Text>
                    <Pressable style={styles.button}>
                      <Text style={styles.buttonText}>R$ {product?.price}</Text>
                    </Pressable>
                    <View style={styles.box}>
                      <Pressable style={styles.buy} onPress={handleBuyButton}>
                        <Text style={styles.buyText}>Buy now</Text>
                      </Pressable>
                    </View>
                </View>
        </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  desc: {
    color: '#888'
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 20
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    paddingVertical: 12,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 24
  },
  box: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  buy: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
    paddingVertical: 12,
    borderRadius: 8,
    textAlign: 'right'
  },
  buyText: {
    color: '#fff'
  }
});
