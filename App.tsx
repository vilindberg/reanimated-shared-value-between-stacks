/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {enableFreeze} from 'react-native-screens';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {FirstScreen} from './FirstScreen';
import {SecondScreen} from './SecondScreen';

enableFreeze(true);

export type BottomTabsStackParamList = {
  FirstScreen: undefined;
  SecondScreen: undefined;
};

const Stack = createBottomTabNavigator<BottomTabsStackParamList>();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="FirstScreen">
            <Stack.Screen name="FirstScreen" component={FirstScreen} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
