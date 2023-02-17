import React from 'react'
import { Provider } from 'react-redux'
import { withExpoSnack } from 'nativewind'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { store } from '@src/redux/store'
import HomeScreen from '@src/screens/HomeScreen'
import RestaurantScreen from '@src/screens/RestaurantScreen'

const Stack = createNativeStackNavigator()

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default withExpoSnack(App)
