import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, FlatList, Pressable, Platform} from 'react-native'
import { CATEGORIES } from '../../data/dummy-data'
const Home = () => {
    return (
        <SafeAreaView style={{flex:1}}> 
            <FlatList
                style={styles.listView}
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => (
                    <View style={styles.gridItem} >
                        <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
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
        
        margin:16,
        height:80,
        width:80,
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
        flexDirection:'row-reverse',
        flexWrap:'wrap',
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
        fontSize: 18,
        color:'white'
    }
})

export default Home