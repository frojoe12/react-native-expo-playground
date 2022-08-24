import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Pressable} from 'react-native'

import { MEALS }  from '../../data/dummy-data'

const Meals = ({navigation}) => {

    const onPressHandler = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <SafeAreaView style={{ flex:1 }}>
            <Pressable onPress={onPressHandler}><View style={styles.buttonContainer} ><Text style={styles.buttonText}>{'< Go back to Main Screen'}</Text></View></Pressable>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        padding:10,
        backgroundColor:'#000',
    },
    buttonText: {
        padding:10,
        color:'white',
        textAlign:'center',
        fontSize:20

    }

})
export default Meals