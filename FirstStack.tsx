import {createStackNavigator} from '@react-navigation/stack';
import {FirstScreen} from './FirstScreen';
import {View} from 'react-native';

export type FirstStackParamList = {
  FirstScreen: undefined;
  OtherScreen: undefined;
};

const Stack = createStackNavigator<FirstStackParamList>();

const OtherScreen = () => null;
export const FirstStack = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="OtherScreen" component={OtherScreen} />
      </Stack.Navigator>
    </View>
  );
};
