import React from 'react'
import { withExpoSnack } from 'nativewind'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '@src/screens/HomeScreen'
import RestaurantScreen from '@src/screens/RestaurantScreen'

const Stack = createNativeStackNavigator()

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default withExpoSnack(App)
