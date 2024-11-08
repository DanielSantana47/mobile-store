import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { Product } from '../../components/product';
import { getAllProducts } from '../../services/product';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {

  const products = getAllProducts()

  return (
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({item}) => <Product key={item.id} id={item.id} img={item.image} title={item.title} description={item.description} price={item.price}/>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})