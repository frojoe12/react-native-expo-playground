import React from 'react'
import {Pressable} from 'react-native'

const IconButton = ({children, headerButtonPressHandler,}) => {
    return (
        <Pressable onPress={headerButtonPressHandler}>{children}</Pressable>
    )
}

export default IconButton