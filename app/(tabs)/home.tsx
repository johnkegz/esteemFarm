// HomeScreen.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import TabOneScreen from '../Home/Animals';

const Tab = createMaterialTopTabNavigator();

// function TabOneScreen() {
//   return <Text>Animals</Text>;
// }

function TabTwoScreen() {
  return <Text>Sick</Text>;
}

function TabThreeScreen() {
  return <Text>Breeds</Text>;
}

export default function Home() {
  return (
    <PaperProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: '#6200ee' }, // Customize the indicator color
          tabBarActiveTintColor: '#6200ee',
          tabBarLabelStyle: { fontSize: 14 },
        }}
      >
        <Tab.Screen name="TabOne" component={TabOneScreen} options={{ title: 'Animals' }} />
        <Tab.Screen name="TabTwo" component={TabTwoScreen} options={{ title: 'Sick' }} />
        <Tab.Screen name="TabThree" component={TabThreeScreen} options={{ title: 'Breeds' }} />
      </Tab.Navigator>
    </PaperProvider>
  );
}
