import React from 'react'
import {Image, Pressable, View, Text, StyleSheet} from 'react-native'

import FoodImage from '../../../assets/images/food-image.jpg'

const MealCard = ({title, ingredients, complexity, affordability, recipe}) => {
    return (
        <View style={styles.mealItem}>
            
            <View>
                <Image style={styles.image} source={FoodImage} />
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    <View>
                        <Text style={styles.label}>INGREDIENTS</Text>
                        <Text style={styles.description}>{ingredients}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>RECIPE</Text>
                        <Text style={styles.description}>{recipe}</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    mealItem: {
        borderRadius:4,
        overflow:'hidden',
        margin:14,
        marginTop:0,
        backgroundColor:'#efefef',
        
    },
    image: {
        width:'100%',
        height: 300
    },
    textWrapper: {
        padding:14
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
        paddingTop:12
    },
    description: {
        fontSize: 14
    },
    buttonPressed: {
        backgroundColor:'#ddd'
    },
    buttonUp: {
        backgroundColor:'#efefef'
    }
})

export default MealCard