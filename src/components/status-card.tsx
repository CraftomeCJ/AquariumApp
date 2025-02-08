import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusCard } from '../types/types';

const StatusCards: React.FC<StatusCard> = ({ title, text, buttonText }) => (
  <View style={styles.statusCard}>
    <Text style={styles.statusTitle}>{title}</Text>
    <Text style={styles.statusText}>{text}</Text>
    <View style={styles.statusButton}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  statusCard: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
  },
  statusText: {
    color: '#666666',
    marginVertical: 8,
  },
  statusButton: {
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FF5A5F',
    textAlign: 'center',
  },
});

export default StatusCards;
