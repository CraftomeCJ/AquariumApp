import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

interface CardProps {
	image: any;
	title: string;
	onPress?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, onPress }) => {
	return (
		<TouchableOpacity
			style={styles.card}
			onPress={onPress}
		>
			<Image
				source={image}
				style={styles.image}
			/>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: { margin: 10, alignItems: 'center' },
	image: { width: 150, height: 100, borderRadius: 10 },
	title: { marginTop: 5, fontSize: 16, fontWeight: 'bold' },
});

export default Card;
