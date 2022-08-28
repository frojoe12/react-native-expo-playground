import React from 'react'
import {Image, Pressable, View, Text, StyleSheet, ScrollView} from 'react-native'

import FoodImage from '../../../assets/images/food-image.jpg'

const MealCard = ({title, ingredients, recipe, image}) => {
    return (
        <View style={styles.mealItem}>
            
            <View style={{ flex:1 }}>
                <Image style={styles.image} source={image} />
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.textWrapper}>
                        <Text style={styles.title}>{title}</Text>
                        <View>
                            <Text style={styles.label}>INGREDIENTS</Text>
                            {ingredients.map(ingredient => <Text key={ingredient} style={styles.description}>{ingredient}</Text>)}
                        </View>
                        <View>
                            <Text style={styles.label}>RECIPE</Text>
                            {recipe.map((recipeItem,index)=><Text key={recipeItem} style={styles.description}>{index+1}. {recipeItem}</Text>)}
                        
                        </View>
                    
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    mealItem: {
        flex:1,
        borderRadius:4,
        overflow:'hidden',
        margin:14,
       
        backgroundColor:'#efefef',
        
    },
    image: {
        width:'100%',
        height: 220,
       
    },
    textWrapper: {
       
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22,
        paddingBottom:10,
        fontFamily:'roboto-slab-regular'
    },
    label: {
        fontWeight: 'bold',
        fontSize:12,
        paddingTop:20
    },
    description: {
        fontSize: 14
    },
    buttonPressed: {
        backgroundColor:'#ddd'
    },
    buttonUp: {
        backgroundColor:'#efefef'
    },
    scrollViewWrapper: {
        flex:1,
        padding:14,
        marginVertical:20,
    }
})

export default MealCard