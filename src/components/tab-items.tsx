import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabItem } from '../types/types';

const TabItem: React.FC<TabItem> = ({ name }) => (
  <View style={styles.tab}>
    <Text style={styles.tabText}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
  },
  tabText: {
    fontSize: 14,
    color: '#444444',
  },
});

export default TabItem;
