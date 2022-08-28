import { Inter_500Medium } from '@expo-google-fonts/inter'
import React from 'react'
import { ImageBackground, StyleSheet, SafeAreaView, View, Text, FlatList, Pressable, Platform} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import { CATEGORIES } from '../../data/dummy-data'
const Home = ({navigation}) => {

    const onPressHandler = (itemData) => () => {
        navigation.navigate('MealsScreen', {
            categoryId: itemData.item.id
        })
    }

    return (
        <SafeAreaView style={{ flex:1 }}> 
            <View style={styles.heading}><Text style={styles.headingText}>Select a meal type</Text></View>
            <View style={styles.listContainer}>
                <FlatList
                    style={styles.listView}
                    data={CATEGORIES}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={(itemData) => (
                        <View style={styles.gridItem} >
                            <Pressable onPress={onPressHandler(itemData)} style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
                                <ImageBackground resizeMode='cover' source={itemData.item.image} style={styles.foodImageBackground}>
                                    <View style={[styles.innerContainer,{backgroundColor:'rgba(0,0,0,0)'}]}>
                                        <LinearGradient style={styles.buttonGradient} colors={['transparent','rgba(0,0,0,0.8)']}><Text style={styles.buttonText}>{itemData.item.title}</Text></LinearGradient></View>
                                </ImageBackground>
                            </Pressable>
                        </View>
                    )
                    }
                />
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    gridItem: {
        flex:1,
        margin:10,
        height:150,
        borderRadius:4,
        elevation: 4,
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowOffset: {width:0, height:2},
        shadowRadius:8,
        overflow: Platform.OS==='android' ? 'hidden' : 'display'
    },
    listView: {
    },
    button: {
        flex:1
    },
    buttonPressed: {
        opacity:.5
    },
    innerContainer: {
        flex:1,
        borderRadius:4,
        padding:0,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    buttonText: {
        fontWeight:'bold',
        fontSize: 16,
        color:'white',
        padding:10,
        paddingTop:20,
        width:'100%',
        textAlign:'center'
    },
    foodImageBackground: {
        flex:1,
        borderRadius:4,
        overflow:'hidden'
    },
    heading: {
        marginBottom:0,
        paddingVertical:10,
        backgroundColor:'#e1e1e1'
    },
    headingText: {
        fontFamily: 'roboto-slab-regular',
        fontSize:28,
        textAlign:'center',
        color:'black'
    },
    listContainer: {
        flex:1,
        paddingVertical:20,
        backgroundColor:'#efefef'

    },
    buttonGradient: {
        width:'100%'
    }
})

export default Home