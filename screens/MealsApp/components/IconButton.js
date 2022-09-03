import React from 'react'
import {Pressable} from 'react-native'

const IconButton = ({children, onPressHandler}) => {
    return (
        <Pressable onPress={onPressHandler}>{children}</Pressable>
    )
}

export default IconButton