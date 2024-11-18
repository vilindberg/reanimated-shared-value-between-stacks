import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const NewBottomTabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: {key: string; name: string}, index: number) => {
        const label = route.name ?? '';
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tab, isFocused && styles.activeTab]}>
            <Text style={[styles.tabText, isFocused && styles.activeTabText]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#f0f0f0',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#000',
  },
});
