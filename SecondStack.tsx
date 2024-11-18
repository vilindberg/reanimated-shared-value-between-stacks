import {createStackNavigator} from '@react-navigation/stack';
import {SecondScreen} from './SecondScreen';
import {View} from 'react-native';

export type SecondStackParamList = {
  SecondScreen: undefined;
  OtherScreen: undefined;
};

const Stack = createStackNavigator<SecondStackParamList>();

const OtherScreen = () => null;
export const SecondStack = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Stack.Navigator initialRouteName="SecondScreen">
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="OtherScreen" component={OtherScreen} />
      </Stack.Navigator>
    </View>
  );
};
