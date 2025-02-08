import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getImage } from '../components/get-images';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        {/* Main Content */}
        <ScrollView style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>S.E.A.</Text>
            <Text style={styles.headerSubtitle}>
              Don't miss our daily Dive Feeding! Don't miss our daily Dive
              Feeding! Don't miss our daily Dive Feeding! Don't miss our daily
              Dive Feeding!
            </Text>
            <Image
              source={require('../assets/notification-icon.png')}
              style={styles.notificationIcon}
            />
          </View>

          {/* Navigation Tabs */}
          <ScrollView horizontal style={styles.tabsContainer}>
            {[
              'Map',
              'Inhabitants',
              'Shows',
              'Shopping',
              'Dine',
              'Meet & Greets',
            ].map((tab) => (
              <View key={tab} style={styles.tab}>
                <Text style={styles.tabText}>{tab}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Quick Access Grid */}
          <View style={styles.gridContainer}>
            {[
              'Map',
              'Inhabitants',
              'Shows',
              'Shopping',
              'Dine',
              'Meet & Greets',
            ].map((item) => (
              <View key={item} style={styles.gridItem}>
                <Image
                  source={require('../assets/map-icon.png')}
                  style={styles.gridIcon}
                />
                <Text style={styles.gridText}>{item}</Text>
              </View>
            ))}
          </View>

          {/* Status Cards */}
          <View style={styles.statusContainer}>
            <View style={styles.statusCard}>
              <Text style={styles.statusTitle}>My e-tickets</Text>
              <Text style={styles.statusText}>There aren't any yet</Text>
              <View style={styles.statusButton}>
                <Text style={styles.buttonText}>Retrieve here</Text>
              </View>
            </View>

            <View style={styles.statusCard}>
              <Text style={styles.statusTitle}>Park hours</Text>
              <Text style={styles.statusText}>
                Today, 13 Feb{'\n'}10am - 5pm
              </Text>
              <View style={styles.statusButton}>
                <Text style={styles.buttonText}>Plan my visit</Text>
              </View>
            </View>
          </View>

          {/* Upcoming Shows */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Shows</Text>
            <Text style={styles.viewAll}>View all</Text>
          </View>

          <ScrollView horizontal style={styles.showsContainer}>
            <View style={styles.showCard}>
              <Text style={styles.showTime}>2:30 PM</Text>
              <Text style={styles.showTitle}>Dive Feeding @ Shipwreck</Text>
            </View>
            <View style={styles.showCard}>
              <Text style={styles.showTime}>2:40 PM</Text>
              <Text style={styles.showTitle}>Say Cheese Shark</Text>
            </View>
            <View style={styles.showCard}>
              <Text style={styles.showTime}>2:30 PM</Text>
              <Text style={styles.showTitle}>
                Dive Feeding @ Shipwreck Dive Feeding @ Shipwreck Dive Feeding @
                Shipwreck Dive Feeding @ Shipwreck
              </Text>
            </View>
            <View style={styles.showCard}>
              <Text style={styles.showTime}>2:40 PM</Text>
              <Text style={styles.showTitle}>Say Cheese Shark</Text>
            </View>
          </ScrollView>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <View style={styles.navItem}>
            <Image
              source={require('../assets/home-icon.png')}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Home</Text>
          </View>
          <View style={styles.navItem}>
            <Image
              source={require('../assets/unknown-icon.png')}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Wallet</Text>
          </View>
          <View style={styles.navItem}>
            <Image
              source={require('../assets/three-dot-circle-icon.png')}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>More</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    marginBottom: 60, // Space for bottom nav
  },
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
  tabsContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
  },
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
  statusContainer: {
    flexDirection: 'row',
    padding: 16,
  },
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },
  viewAll: {
    color: '#007AFF',
  },
  showsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 16,
  },
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
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#444444',
  },
});

export default HomeScreen;
