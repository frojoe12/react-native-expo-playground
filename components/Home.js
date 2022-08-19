import React, { useState } from "react"
import { Dimensions, Image, Modal, View, TextInput, Button, Pressable,SafeAreaView, FlatList, Text, StyleSheet } from 'react-native'
import Navigation from './Navigation'
import { HomeHeader, FocusedStatusBar, NFTCard} from './'
import { COLORS } from '../constants/COLORS'
import { styles } from '../assets/styles/styles'
import GoalInput from "./GoalInput"
import GoalItem from "./GoalItem"
import {ExampleSVG} from "../assets/images/example.js"
import examplePNG from "../assets/images/example.png"
import Title from './ui/Title'

const Home = ({navigation, name="joe"}) => {
    const [message,setMessage] = useState("Waiting...")
    const [toDoList,setToDoList] = useState([{id:1,goal:"Mow the Lawn"},
    {id:2,goal:"Washing Up"},
    {id:3,goal:"Accounts"},
    {id:4,goal:"Tidy house"},
    {id:5,goal:"Learn native"},
    {id:6,goal:"another task"},
    {id:7,goal:"make lunch"},
    {id:8,goal:"clean the car"},
    {id:9,goal:"clear the shed"},
    {id:10,goal:"clear the house"},
    {id:11,goal:"clear the attic"},
    {id:12,goal:"take out the rubbish"},
    {id:13,goal:"cut the hedge"},
])
    const [modalIsVisible,setModalIsVisible] = useState(false);
    const [textInput,setTextInput] = useState('');
    const switchAddGoalHandler = () => {
        setModalIsVisible(prevState => !prevState)
    }
    const newToDo = () => {
        if (textInput==="") return
        const newId = toDoList.length>0 ? toDoList[toDoList.length-1].id+1 : 1;
        setToDoList(prevState =>[...prevState, {id:newId,goal:textInput}])
        setTextInput("")
        switchAddGoalHandler()
    }
    const changeText = (text) => {
        setTextInput(text)
    }
    const deleteGoal = (goalId) => {
        const newGoalList = () => toDoList.filter(item=>item.id!==goalId)
        setToDoList(newGoalList) 
    }

    const deviceWidth = Dimensions.get('window').width
    
    
    return (
        <View style={styles.appContainer}>
            <Text>{deviceWidth}px wide</Text>
            <View style={styles.buttonNewGoalContainer}>
                <View style={styles.buttonNewGoalView}>
                    <Pressable onPress={switchAddGoalHandler}>
                        <Text style={styles.buttonNewGoal}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.iconContainer}>
                <ExampleSVG />
                {/*<Image style={styles.icon} source={examplePNG} />*/}
            </View>
            <Modal visible={modalIsVisible} animationType="slide">
                <View style={styles.inputContainer}>
                    
                    <GoalInput 
                        changeText={changeText}
                        textInput={textInput}
                        newToDo={newToDo}
                        switchAddGoalHandler={switchAddGoalHandler}
                    />
                </View>
            </Modal>
            <View style={styles.goalsContainer}>
                <View style={styles.titleContainer}>
                <Title>List of Goals</Title>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={toDoList}
                        renderItem={
                            itemData=> {
                                const item = `${itemData.item.id}. ${itemData.item.goal}`
                                return(<GoalItem text={item} goalId={itemData.item.id} deleteGoal={deleteGoal} />)
                            }
                        }
                        keyExtractor={item=> `goal-id-${item.id}`}
                    />
                </View>
                
                
                
            </View>
        </View>
    )

    
  }


export default Home