import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getImage } from './get-images';

const HeaderComponent: React.FC = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>S.E.A.</Text>
    <Text style={styles.headerSubtitle}>
      Don't miss our daily Dive Feeding!
    </Text>
    <Image
      source={getImage('notification-icon')}
      style={styles.notificationIcon}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  headerSubtitle: {
    flex: 1,
    textAlign: 'center',
    color: '#666666',
    marginHorizontal: 8,
    flexWrap: 'wrap',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
});

export default HeaderComponent;
