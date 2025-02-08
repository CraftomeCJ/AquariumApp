import { ImageSourcePropType, Platform } from 'react-native';

interface Image {
  name: string;
  image: ImageSourcePropType;
}

const imageSourceArray: Image[] = [
  {
    name: 'header-logo',
    image: require('../assets/header-logo.png'),
  },
  {
    name: 'three-dot-circle-icon',
    image: require('../assets/three-dot-circle-icon.png'),
  },
  {
    name: 'home-icon',
    image: require('../assets/home-icon.png'),
  },
  {
    name: 'notification-icon',
    image: require('../assets/notification-icon.png'),
  },
  {
    name: 'ticket-icon',
    image: require('../assets/ticket-icon.png'),
  },
  {
    name: 'meet-greets-icon',
    image: require('../assets/meet-greets-icon.png'),
  },
  {
    name: 'clock-icon',
    image: require('../assets/clock-icon.png'),
  },
  {
    name: 'map-icon',
    image: require('../assets/map-icon.png'),
  },
  {
    name: 'unknown-icon',
    image: require('../assets/unknown-icon.png'),
  },
  {
    name: 'dine-icon',
    image: require('../assets/dine-icon.png'),
  },
  {
    name: 'shows-icon',
    image: require('../assets/shows-icon.png'),
  },
  {
    name: 'close-icon',
    image: require('../assets/close-icon.png'),
  },
  {
    name: 'shopping-icon',
    image: require('../assets/shopping-icon.png'),
  },
  {
    name: 'people-icon',
    image: require('../assets/people-icon.png'),
  },
];

export const getImage = (name: string) => {
  const found = imageSourceArray.find((e) => e.name === name);
  return found?.image || null;
};
