import {
	StackNavigationProp,
	Header,
} from '@react-navigation/stack';
import React from 'react';
import {
	View,
	ScrollView,
	Text,
	Image,
	StyleSheet,
	StatusBar,
} from 'react-native';
import { RootStackParamList } from '../types/navigation';

type DetailScreenProps = {
	navigation: StackNavigationProp<RootStackParamList, 'DETAILS'>;
};

const DetailScreen: React.FC<DetailScreenProps> = ({
	navigation,
}) => {
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

export default DetailScreen;
