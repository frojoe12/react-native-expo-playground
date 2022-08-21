import React, { View, Text, Pressable, StyleSheet } from 'react-native'
import { COLORS } from "../assets/styles/colors"
const GoalItem = ({text, deleteGoal,goalId}) => {return (
    <Pressable style={({pressed})=>pressed && styles.pressedItem}onPress={deleteGoal.bind(this,goalId)}>
<View style={styles.goalItem}><Text style={styles.goalItemText}>{text}</Text></View></Pressable>
)}

const styles=StyleSheet.create({
    goalItem: {
        marginTop:20,
        borderRadius:6,
        padding:8,
        backgroundColor:COLORS.primary,
        color:'white',
        

    },
    goalItemText: {
        color:'white',
        fontFamily: 'roboto-slab-regular',
    },
    pressedItem: {
        opacity:.5
    }
})

export default GoalItem