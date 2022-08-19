import React, { View, TextInput, Pressable, Text, Button } from 'react-native'
import { styles } from '../assets/styles/styles'


const GoalInput = ({changeText,textInput,newToDo,switchAddGoalHandler}) => {
    return (
        <>
        <View style={styles.goalsInputWrapper}>
        <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={changeText} value={textInput} />
                <View style={styles.goalsInputWrapperButtons}><Pressable onPress={newToDo} style={styles.goalsPressable}><View style={styles.buttonOuter}><Text style={styles.buttonMain}>New Goal</Text></View></Pressable><Button title="Cancel" onPress={switchAddGoalHandler} /></View>
                
                </View>
        </>
    )
}
export default GoalInput