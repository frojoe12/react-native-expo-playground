import React from 'react'
import {Image, Pressable, View, Text, StyleSheet} from 'react-native'

import FoodImage from '../../../assets/images/food-image.jpg'

const MealItem = ({title, onMealSelectHandler, duration, complexity, affordability, image}) => {
    return (
        <View style={styles.mealItem}>
            <Pressable 
                onPress={onMealSelectHandler}
                style={({pressed}) => pressed ? styles.buttonPressed : styles.buttonUp}
            >
                <View>
                    <Image style={styles.image} source={image} />
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>{title}</Text>
                        <View>
                            <Text style={styles.label}>DURATION</Text>
                            <Text style={styles.description}>{duration}</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>COMPLEXITY</Text>
                            <Text style={styles.description}>{complexity}</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>AFFORDABILITY</Text>
                            <Text style={styles.description}>{affordability}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
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
        height: 150
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

export default MealItem