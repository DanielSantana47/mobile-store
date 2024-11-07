import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Product } from '../../../../../components/product';
import { data } from '../../../../../data/index'

export default function Begin() {

  const { idCategory, title } = useLocalSearchParams()

  const list = data.products.filter(item => item.idCategory.toString() === idCategory)
  console.log(list)
  return (
    <>
        <Stack.Screen options={{title: title.toString()}}/>
        <ScrollView>
          <View style={styles.container}>
              {list.map(item=> (
                <Product key={item.id} img={item.image} title={item.title} description={item.description} price={item.price}/>
              ))}
          </View>
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20
  },
});
