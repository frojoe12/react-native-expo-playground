import { Inter_500Medium } from '@expo-google-fonts/inter'
import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, FlatList, Pressable, Platform} from 'react-native'
import { CATEGORIES } from '../../data/dummy-data'
const Home = ({navigation}) => {

    const onPressHandler = (itemData) => () => {
        navigation.navigate('MealsScreen', {
            categoryId: itemData.item.id
        })
    }

    return (
        <SafeAreaView style={{ flex:1 }}> 
            <FlatList
                style={styles.listView}
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={(itemData) => (
                    <View style={styles.gridItem} >
                        <Pressable onPress={onPressHandler(itemData)} style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
                            <View style={[styles.innerContainer,{backgroundColor:itemData.item.color}]}><Text style={styles.buttonText}>{itemData.item.title}</Text></View>
                        </Pressable>
                    </View>
                )
                }
            />
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    gridItem: {
        flex:1,
        margin:14,
        height:120,
        borderRadius:8,
        elevation: 4,
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowOffset: {width:0, height:2},
        shadowRadius:8,
        backgroundColor:'white',
        overflow: Platform.OS==='android' ? 'hidden' : 'display'
    },
    listView: {
        flex:1,
        backgroundColor:'#efefef'
    },
    button: {
        flex:1
    },
    buttonPressed: {
        opacity:.5
    },
    innerContainer: {
        flex:1,
        borderRadius:8,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText: {
        fontWeight:'bold',
        fontSize: 15,
        color:'white'
    }
})

export default Home