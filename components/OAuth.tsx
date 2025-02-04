import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';

const OAuth = () => {
    const handleGoogleSignIn = () => {
        // code
    }

  return (
    <View>
      <View className='flex flex-row justify-center items-center mt-4 gap-x-3 mb-4'>
        <View className='flex-1 h-[1px] bg-gray-300' />
        <Text className='text-lg font-medium'>Or</Text>
        <View className='flex-1 h-[1px] bg-gray-300' />
      </View>
      
      <CustomButton
        className='w-full shadow-none bg-gray-200 p-2'
        title='Continue with Google'
        onPress={handleGoogleSignIn}
      />
    </View>
  )
}

export default OAuth;
