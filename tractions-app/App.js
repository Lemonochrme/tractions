import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/HomePage';
import { Provider as PaperProvider, MD3DarkTheme } from 'react-native-paper';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={MD3DarkTheme}> {/* Utilisation du thème sombre MD3 */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
