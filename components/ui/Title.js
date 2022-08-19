import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Title = ({children}) => (<Text style={style.title}>{children}</Text>)

const style=StyleSheet.create({
    title: {
        fontSize:30,
        textAlign:'center',
        fontFamily:'roboto-slab-regular'
    }
})

export default Title