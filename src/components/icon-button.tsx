import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getImage } from './get-images';

interface IconButtonProps {
	icon: any;
	onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
	icon,
	onPress,
}) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={onPress}
		>
			<Image
				source={getImage(`${icon}`)}
				style={styles.icon}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: { padding: 10 },
	icon: { width: 24, height: 24 },
});

export default IconButton;
