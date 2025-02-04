import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="Home" />
        <Tabs.Screen name="Profile" />
    </Tabs>
  )
}

export default Layout;
