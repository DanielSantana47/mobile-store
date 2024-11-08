import { router } from "expo-router"
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native"

type Props = {
    idCategory: number,
    img: string,
    title: string
}

export const Category = ({idCategory, img, title}: Props)=> {

    const handleCLick = ()=> {
        router.navigate(`category/${idCategory}`)
    }
    return (
        <Pressable style={styles.container} onPress={handleCLick}>
            <ImageBackground style={styles.img} source={{uri: img}}>
              <View style={styles.box}>
                <Text style={styles.text}>{title}</Text>
              </View>
            </ImageBackground>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        marginBottom: 10
    },
    img: {
      flex: 1,
      borderRadius: 14,
      overflow: 'hidden'
    },
    box: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    text: {
      color: '#fff',
      fontSize: 24
    }
  });