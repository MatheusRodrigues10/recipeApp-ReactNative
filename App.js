import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Recipe from './src/Recipe';
import Description from './src/Description';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={'Receitas'}
        component={Recipe}
        options={{title: 'Receitas', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name={'Description'}
        component={Description}
        options={{headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
