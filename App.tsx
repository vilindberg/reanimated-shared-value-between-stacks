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
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import React from 'react';
import {FirstStack, FirstStackParamList} from './FirstStack';
import {SecondStack, SecondStackParamList} from './SecondStack';
import {View} from 'react-native';

enableFreeze(true);

export type BottomTabsStackParamList = {
  FirstStack: NavigatorScreenParams<FirstStackParamList>;
  SecondStack: NavigatorScreenParams<SecondStackParamList>;
};

const Stack = createBottomTabNavigator<BottomTabsStackParamList>();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="FirstStack">
            <Stack.Screen name="FirstStack" component={FirstStack} />
            <Stack.Screen name="SecondStack" component={SecondStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
