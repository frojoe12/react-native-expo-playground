import React, {useLayoutEffect} from 'react'

import { SafeAreaView} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { MEALS, CATEGORIES }  from '../../data/dummy-data'

import MealsList from './components/MealsList'



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

    

    return (
        <SafeAreaView style={{ flex:1 }}>
            
            
            <MealsList meals={meals} />
            
            
            
        </SafeAreaView>
    )
}

export default Meals