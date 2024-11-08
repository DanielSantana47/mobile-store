import { Stack, useLocalSearchParams } from 'expo-router';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { getProductByIdCategory } from '../../../services/product';
import { getCategoryByProductId } from '../../../services/category';
import { Product } from '../../../components/product';

export default function Begin() {

  const { idCategory } = useLocalSearchParams()

  const products = getProductByIdCategory(parseInt(idCategory.toString()))
  const category = getCategoryByProductId(parseInt(idCategory.toString()))
  
  return (
    <>
        <Stack.Screen options={{title: category?.title}}/>
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({item}) => <Product key={item.id} id={item.id} img={item.image} title={item.title} description={item.description} price={item.price}/>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
});
