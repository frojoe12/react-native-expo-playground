import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Pressable} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'

import { MEALS }  from '../../data/dummy-data'

const Meals = ({route}) => {
    
    const navigation = useNavigation()
    //const route = useRoute()
    const categoryId = route.params.categoryId
    
    const meals = 
        MEALS.filter(meal=>{
            return (meal.categoryIds.includes(categoryId) )}
        )
    
    console.log(meals)

    const onPressHandler = () => {
        //navigation.navigate('HomeScreen')
        navigation.navigate('HomeScreen')
    }

    return (
        <SafeAreaView style={{ flex:1 }}>
            <Pressable onPress={onPressHandler}><View style={styles.buttonContainer} ><Text style={styles.buttonText}>{'< Go back to Main Screen'}</Text></View></Pressable>
            {meals.map(meal=><View><Text>{meal.title}</Text></View>)}
            <Text>{categoryId}</Text>
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