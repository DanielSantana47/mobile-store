import { ScrollView, StyleSheet, View } from 'react-native';
import { Product } from '../../components/product';
import { data } from '../../data/index'

export default function Begin() {
  return (
      <ScrollView>
        <View style={styles.container}>
            {data.products.map(item=> (
              <Product key={item.id} img={item.image} title={item.title} description={item.description} price={item.price}/>
            ))}
        </View>
      </ScrollView>
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
