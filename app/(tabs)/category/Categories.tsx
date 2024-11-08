import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { data } from '../../../data/index'
import { Category } from '../../../components/category';
import { getAllCategories } from '../../../services/category';

export default function Categories() {

  const categories = getAllCategories()

  return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={({item}) => <Category key={item.id} idCategory={item.id} img={item.cover} title={item.title}/>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
});
