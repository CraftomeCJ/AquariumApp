import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailScreen from '../screens/detail-screen';
import HomeScreen from '../screens/home-screen';
import { RootStackParamList } from '../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => (
	<Stack.Navigator
		initialRouteName='HOME'
		screenOptions={{
			headerShown: false,
		}}
	>
		<Stack.Screen
			name='HOME'
			component={HomeScreen}
		/>
		<Stack.Screen
			name='DETAILS'
			component={DetailScreen}
		/>
	</Stack.Navigator>
);

export default AppNavigator;
