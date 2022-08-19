import {View, Text} from 'react-native'
import Navigation from './Navigation'

const Details = ({navigation, name="joe"}) => {
    return (
    <View>
      <Navigation navigation={navigation} />
        <Text>Details</Text>
      </View>
    )
  }

export default Details