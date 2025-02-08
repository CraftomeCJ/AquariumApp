import { GridItem, Show, StatusCard, TabItem } from '../types/types';

export const TAB_ITEMS: TabItem[] = [
  { name: 'Map' },
  { name: 'Inhabitants' },
  { name: 'Shows' },
  { name: 'Shopping' },
  { name: 'Dine' },
  { name: 'Meet & Greets' },
];

export const GRID_ITEMS: GridItem[] = [
  { name: 'Map', icon: 'map-icon' },
  { name: 'Inhabitants', icon: 'dine-icon' },
  { name: 'Shows', icon: 'shows-icon' },
  { name: 'Shopping', icon: 'shopping-icon' },
  { name: 'Dine', icon: 'dine-icon' },
  { name: 'Meet & Greets', icon: 'meet-greets-icon' },
];

export const STATUS_CARDS: StatusCard[] = [
  {
    title: 'My e-tickets',
    text: "There aren't any yet",
    buttonText: 'Retrieve here',
  },
  {
    title: 'Park hours',
    text: 'Today, 13 Feb\n10am - 5pm',
    buttonText: 'Plan my visit',
  },
];

export const SHOWS: Show[] = [
  { time: '2:30 PM', title: 'Dive Feeding @ Shipwreck' },
  { time: '2:40 PM', title: 'Say Cheese Shark' },
  {
    time: '2:30 PM',
    title:
      'Dive Feeding @ Shipwreck Dive Feeding @ Shipwreck Dive Feeding @ Shipwreck Dive Feeding @ Shipwreck',
  },
  { time: '2:40 PM', title: 'Say Cheese Shark' },
];
