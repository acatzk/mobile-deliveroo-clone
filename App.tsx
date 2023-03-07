import React from 'react'
import { Provider } from 'react-redux'
import { withExpoSnack } from 'nativewind'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { store } from '@src/redux/store'
import HomeScreen from '@src/screens/HomeScreen'
import BasketScreen from '@src/screens/BasketScreen'
import DeliveryScreen from '@src/screens/DeliveryScreen'
import RestaurantScreen from '@src/screens/RestaurantScreen'
import PreparingOrderScreen from '@src/screens/PreparingOrderScreen'

const Stack = createNativeStackNavigator()

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{
              presentation: 'modal',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrderScreen}
            options={{ presentation: 'fullScreenModal', headerShown: false }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ presentation: 'fullScreenModal', headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default withExpoSnack(App)
