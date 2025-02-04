import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="Home" options={{ headerShown: false }} />
        <Tabs.Screen name="Profile" options={{ headerShown: false }} />
    </Tabs>
  )
}

export default Layout;
