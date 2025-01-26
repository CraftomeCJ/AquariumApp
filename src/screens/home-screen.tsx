import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	ActivityIndicator,
	Button,
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { RootStackParamList } from '../types/navigation';

type HomeScreenProps = {
	navigation: StackNavigationProp<RootStackParamList, 'HOME'>;
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default HomeScreen;
