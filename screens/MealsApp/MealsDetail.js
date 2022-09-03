import React, {useLayoutEffect, useContext} from 'react'
import {useNavigation, useRoute} from '@react-navigation/native'
import { MEALS }  from '../../data/dummy-data'
import {SafeAreaView, View} from 'react-native'
import MealCard from './components/MealCard'
import IconButton from './components/IconButton'
import {Ionicons} from '@expo/vector-icons'

import { FavoritesContext } from '../../store/context/favoritesContext'




const MealsDetail = () => {

    const favoriteMealsContext = useContext(FavoritesContext)

    const navigation = useNavigation()
    const route = useRoute()
    const mealId = route.params.mealId

    const mealIsFavorite = favoriteMealsContext.ids.includes(mealId)

    const changeFavoriteStatusHandler = () => {
        if (mealIsFavorite) {
            favoriteMealsContext.removeFavorite(mealId)
        } else {
            favoriteMealsContext.addFavorite(mealId)
        }
    }

    useLayoutEffect(()=>{
        const titleOptions = () => {
            const mealTitle = MEALS.find(meal=>meal.id === mealId).title
            return {
                title:mealTitle,
                headerRight: () => {
                    return (<IconButton onPressHandler={changeFavoriteStatusHandler}><View style={{ padding:5 }}><Ionicons name="star" size={24} color={mealIsFavorite ? '#e91e63' : '#bbbbbb'}/></View></IconButton>)
                }
            }
        } 
        navigation.setOptions(titleOptions())
    },[navigation, changeFavoriteStatusHandler])
    const selectedMeal = MEALS.find(meal=>meal.id===mealId)

    return (<SafeAreaView style={{ flex:1 }}><MealCard {...selectedMeal} /></SafeAreaView>)
}

export default MealsDetail