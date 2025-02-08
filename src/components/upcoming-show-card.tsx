import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Show } from '../types/types';

const UpcomingShowCard: React.FC<Show> = ({ time, title }) => (
  <View style={styles.showCard}>
    <Text style={styles.showTime}>{time}</Text>
    <Text style={styles.showTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  showCard: {
    width: 200,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
  },
  showTime: {
    color: '#666666',
    marginBottom: 8,
  },
  showTitle: {
    fontSize: 14,
    color: '#222222',
  },
});

export default UpcomingShowCard;
