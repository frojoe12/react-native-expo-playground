import React, { useLayoutEffect, useState} from 'react'
import { View, Switch, Image, Text, TextInput, SafeAreaView,ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import avatarImage from '../../assets/images/avatar.png'
import foodImage from '../../assets/images/food-image.jpg'

const HomeScreen = () => {

    const [isDown, setIsDown] = useState(false);

    const handleIsDown = () => {
        setIsDown(prev => !prev);
    }

    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:'Title',
            headerShown:false
        })
    },[])

    return (
        <SafeAreaView className='bg-white pt-5'>
            {/* header}*/}
            <View className={`flex-1 flex-row justify-between items-center p-2 ${isDown ? `bg-slate-800` : ``}`}>
                <Image source={avatarImage} className='h-7 w-7 rounded-full' />
                <Text className='text-slate-500 font-extrabold'>
                hello is anybody out there
            </Text>
            </View>
            <View><TextInput className='p-2 border-2 m-2 rounded-md border-slate-400' placeholder='What is your location?' /></View>
            <View className='flex-1'>
                <ScrollView>
                    <Image source={foodImage} />
                    <Text>This is a nice image</Text>
                </ScrollView>
            </View>
            <View className='p-4'><Switch 
            trackColor={{ false:'#999',true:'green' }}
            ios_backgroundColor='#999' onValueChange={handleIsDown} value={isDown} /></View>
            
        </SafeAreaView>
    )
}

export default HomeScreen