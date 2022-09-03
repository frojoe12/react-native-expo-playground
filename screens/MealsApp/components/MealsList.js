import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem'
import { useNavigation, useRoute } from '@react-navigation/native'





const MealsList = ({meals}) => {

    const navigation = useNavigation()

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
            image: item.image
        }
        return (<MealItem onMealSelectHandler={mealSelectHandler} {...mealItemProps} />)
    }


    return (
        <FlatList
            style={styles.mealsList}
            data={meals}
            keyExtractor={(item) => item.id}
            numColumns={1}
            renderItem={itemData=>
                renderMealItem(itemData)
            }
        />
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

export default MealsList