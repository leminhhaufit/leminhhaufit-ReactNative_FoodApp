import React, {
  Component
} from 'react';
import {
  Text,
  View
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import HomeUser from './src/screens/HomeUser';

const Stack = createStackNavigator();
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeUser" component={HomeUser} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App