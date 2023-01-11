import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View className="flex h-screen flex-1 items-center justify-center text-black">
      <Text className="text-black">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default App
