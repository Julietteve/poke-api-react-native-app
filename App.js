import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './src/components'
import { Items } from './src/Screens';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={Items} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}