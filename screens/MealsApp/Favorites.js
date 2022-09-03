import React, {useContext, useState} from 'react'
import {View,Text} from 'react-native'
import MealsList from './components/MealsList'

import { MEALS }  from '../../data/dummy-data'

import { FavoritesContext } from '../../store/context/favoritesContext'

const Favorites = () => {

    const favoriteMealsContext = useContext(FavoritesContext)
    const meals = 
        MEALS.filter(meal=>{
            return (favoriteMealsContext.ids.includes(meal.id))}
        )

    return (
        <>
            {meals.length>0 ? <MealsList meals={meals} /> : <View><Text>You have no meals added yet, visit the main page and add some in!</Text></View>}
        </>
       
    )
}

export default Favorites