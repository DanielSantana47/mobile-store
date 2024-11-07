import { ScrollView, StyleSheet, View } from 'react-native';
import { data } from '../../../data/index'
import { Category } from '../../../components/category';

export default function Categories() {
  return (
      <ScrollView>
        <View style={styles.container}>
          {data.categories.map(item => (
            <Category key={item.id} idCategory={item.id} img={item.cover} title={item.title}/>
          ))}
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#eee',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    overflow: 'hidden'
  },
});
