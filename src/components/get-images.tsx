interface Image {
	name: string;
	image: any;
}

const imageSourceArray: Image[] = [
	{
		name: 'header-logo',
		image: require('./assets/icons/header-logo.png'),
	},
	{
		name: 'three-dot-circle-icon',
		image: require('./assets/icons/three-dot-circle-icon.png'),
	},
	{
		name: 'home-icon',
		image: require('./assets/icons/home-icon.png'),
	},
	{
		name: 'notification-icon',
		image: require('./assets/icons/notification-icon.png'),
	},
	{
		name: 'ticket-icon',
		image: require('./assets/icons/ticket-icon.png'),
	},
	{
		name: 'meet-greets-icon',
		image: require('./assets/icons/meet-greets-icon.png'),
	},
	{
		name: 'clock-icon',
		image: require('./assets/icons/clock-icon.png'),
	},
	{
		name: 'map-icon',
		image: require('./assets/icons/map-icon.png'),
	},
	{
		name: 'unknown-icon',
		image: require('./assets/icons/unknown-icon.png'),
	},
	{
		name: 'dine-icon',
		image: require('./assets/icons/dine-icon.png'),
	},
	{
		name: 'shows-icon',
		image: require('./assets/icons/shows-icon.png'),
	},
	{
		name: 'close-icon',
		image: require('./assets/icons/close-icon.png'),
	},
	{
		name: 'shopping-icon',
		image: require('./assets/icons/shopping-icon.png'),
	},
	{
		name: 'close-icon',
		image: require('./assets/icons/close-icon.png'),
	},
];

export const getImage = (name: string) => {
	const found = imageSourceArray.find((e) => e.name === name);
	return found ?? null;
};
