import {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const FirstScreen = () => {
  const width = useSharedValue(100);

  useEffect(() => {
    console.log('FirstScreen mounted');

    return () => {
      console.log('FirstScreen unmounted');
    };
  }, []);

  useEffect(() => {
    width.value = withTiming(300, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Animated.View
        style={[
          {height: '100%', backgroundColor: 'pink'},
          animatedStyle,
        ]}></Animated.View>
    </View>
  );
};
