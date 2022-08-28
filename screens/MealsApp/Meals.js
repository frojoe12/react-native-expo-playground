import React, {useLayoutEffect} from 'react'
import { SafeAreaView, View, Text, StyleSheet, Pressable, FlatList} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'

import { MEALS, CATEGORIES }  from '../../data/dummy-data'
import MealItem from './components/MealItem'



const Meals = () => {
    
    const navigation = useNavigation()
    const route = useRoute()
    //const route = useRoute()
    const categoryId = route.params.categoryId
       
    useLayoutEffect(()=>{
        const titleOptions = () => {
            const category = CATEGORIES.find(category=>category.id === categoryId).title
            return {title:category}
        } 
        navigation.setOptions(titleOptions())
    },[categoryId, navigation])

    const meals = 
        MEALS.filter(meal=>{
            return (meal.categoryIds.includes(categoryId))}
        )

    const renderMealItem = (itemData) => {
        const mealSelectHandler = () => {
            navigation.navigate('MealsDetailScreen',{mealId: itemData.item.id})
        }
        const item = itemData.item
        const mealItemProps = {
            title: item.title,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }
        return (<MealItem onMealSelectHandler={mealSelectHandler} {...mealItemProps} />)
    }

    return (
        <SafeAreaView style={{ flex:1 }}>
            
            
            <FlatList
                style={styles.mealsList}
                data={meals}
                keyExtractor={(item) => item.id}
                numColumns={1}
                renderItem={itemData=>
                    renderMealItem(itemData)
                }
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
        fontSize:20,
        fontFamily:'roboto-slab-regular'
    },
    mealsList: {
        flex:1,
        marginTop:14
    },
    

})
export default Meals