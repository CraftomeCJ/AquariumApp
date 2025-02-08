import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GridItem } from '../types/types';
import { getImage } from './get-images';

const QuickLinkItem: React.FC<GridItem> = ({ name, icon }) => (
  <View style={styles.gridItem}>
    <Image source={getImage(icon)} style={styles.gridIcon} />
    <Text style={styles.gridText}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  gridItem: {
    width: '33.33%',
    alignItems: 'center',
    padding: 12,
  },
  gridIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  gridText: {
    fontSize: 12,
    color: '#444444',
    textAlign: 'center',
  },
});

export default QuickLinkItem;
