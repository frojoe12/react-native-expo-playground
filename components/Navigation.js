import { Button } from "react-native"

const Navigation = ({navigation}) => {
    return (
      <>
        <Button title="Home" onPress={()=>navigation.navigate('Home')} />
        <Button title="Details" onPress={()=>navigation.navigate('Details')} />
     </>
    )
  }

  export default Navigation