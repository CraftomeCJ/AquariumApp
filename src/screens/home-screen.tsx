import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getImage } from '../components/get-images';
import Header from '../components/header';
import QuickLinkItems from '../components/quick-link-items';
import StatusCard from '../components/status-card';
import TabItems from '../components/tab-items';
import UpcomingShowCards from '../components/upcoming-show-card';
import {
  GRID_ITEMS,
  SHOWS,
  STATUS_CARDS,
  TAB_ITEMS,
} from '../constants/dashboard-constants';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <View style={styles.scrollView}>
          {/* Header */}
          <Header />
          {/* Navigation Tabs */}
          <FlatList
            data={TAB_ITEMS}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <TabItems {...item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          {/* Quick Access Grid */}
          <FlatList
            data={GRID_ITEMS}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <QuickLinkItems {...item} />}
            numColumns={3}
            contentContainerStyle={styles.gridContainer}
          />
          {/* Status Cards */}
          <View style={styles.statusContainer}>
            {STATUS_CARDS.map((card, index) => (
              <StatusCard key={index} {...card} />
            ))}
          </View>
          {/* Upcoming Shows */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Shows</Text>
            <Text style={styles.viewAll}>View all</Text>
          </View>
          <FlatList
            data={SHOWS}
            keyExtractor={(item, index) => `${item.time}-${index}`}
            renderItem={({ item }) => <UpcomingShowCards {...item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <View style={styles.navItem}>
            <Image source={getImage('home-icon')} style={styles.navIcon} />
            <Text style={styles.navText}>Home</Text>
          </View>
          <View style={styles.navItem}>
            <Image source={getImage('unknown-icon')} style={styles.navIcon} />
            <Text style={styles.navText}>Wallet</Text>
          </View>
          <View style={styles.navItem}>
            <Image
              source={getImage('three-dot-circle-icon')}
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
    marginBottom: 80, // Space for bottom nav
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
    // paddingBottom: 20, // Add padding to respect safe area
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
