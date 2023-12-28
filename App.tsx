import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BottomNavigator from './navegadores/BottomNavigator';
import StackNavigation from './navegadores/StackNavigator';
import MainNavigator from './navegadores/MainNavigator';

export default function App() {
  return (
   <MainNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
