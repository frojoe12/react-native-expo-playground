import React, {useLayoutEffect} from 'react'
import {useNavigation, useRoute} from '@react-navigation/native'
import { MEALS }  from '../../data/dummy-data'
import MealCard from './components/MealCard'


const MealsDetail = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const mealId = route.params.mealId

    useLayoutEffect(()=>{
        const titleOptions = () => {
            const mealTitle = MEALS.find(meal=>meal.id === mealId).title
            return {title:mealTitle}
        } 
        navigation.setOptions(titleOptions())
    },[])
    const selectedMeal = MEALS.find(meal=>meal.id===mealId)

    return (<MealCard {...selectedMeal} />)
}

export default MealsDetail