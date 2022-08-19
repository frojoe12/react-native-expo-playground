import {View, Text } from "react-native"

const NFTCard = ({item}) => {
    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}

export default NFTCard