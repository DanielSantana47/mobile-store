import { router, useNavigation } from "expo-router"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

type Props = {
    img: string,
    title: string,
    description: string,
    price: number
}

export const Product = ({img, title, description, price}: Props)=> {

  const url = encodeURIComponent(img) as string

    const handleCLick = ()=> {
        router.navigate(`productView/${url}/${title}/${description}/${price}`)
    }
    return(
        <Pressable style={styles.container} onPress={handleCLick}>
            <Image style={styles.img} source={{uri: img}} resizeMode='cover'/>
            <View style={styles.box}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{description}</Text>
                <Text style={styles.price}>R$ {price}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20
    },
    img: {
      height: 120,
      flex: 1,
      borderRadius: 20
    },
    box: {
      flex: 2,
      gap: 10
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    desc: {
      color: '#888'
    },
    price: {
      fontWeight: 'bold',
      textAlign: 'right',
      fontSize: 16
    }
  });