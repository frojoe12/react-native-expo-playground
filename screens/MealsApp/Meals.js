import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Pressable, FlatList} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'

import { MEALS }  from '../../data/dummy-data'
import MealItem from './components/MealItem'



const Meals = ({route}) => {
    
    const navigation = useNavigation()
    //const route = useRoute()
    const categoryId = route.params.categoryId
    
    const meals = 
        MEALS.filter(meal=>{
            return (meal.categoryIds.includes(categoryId))}
        )
    
    //console.log(meals)

    const onPressHandler = () => {
        //navigation.navigate('HomeScreen')
        navigation.navigate('HomeScreen')
    }
    

    const renderMealItem = (itemData) => {
        const item = itemData.item
        const mealItemProps = {
            title: item.title,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }
        return (<MealItem onMealSelectHandler={()=>console.log('hey')} {...mealItemProps} />)
    }

    return (
        <SafeAreaView style={{ flex:1 }}>
            <Pressable onPress={onPressHandler}><View style={styles.buttonContainer} ><Text style={styles.buttonText}>{'< Go back to Main Screen'}</Text></View></Pressable>
            
            <FlatList
                style={styles.mealsList}
                data={meals}
                keyExtractor={(item) => item.id}
                numColumns={1}
                renderItem={renderMealItem}
            />
            
            
            
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

    },
    mealsList: {
        flex:1,
        marginTop:14
    },
    

})
export default Meals