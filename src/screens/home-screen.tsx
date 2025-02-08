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
import { useTheme } from '../utils/ThemeProvider';

const HomeScreen: React.FC = () => {
  // Access the theme using the useTheme hook
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
    >
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
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
            <Text
              style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}
            >
              Upcoming Shows
            </Text>
            <Text style={[styles.viewAll, { color: theme.colors.link }]}>
              View all
            </Text>
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
            <Text
              style={[styles.navText, { color: theme.colors.textSecondary }]}
            >
              Home
            </Text>
          </View>
          <View style={styles.navItem}>
            <Image source={getImage('unknown-icon')} style={styles.navIcon} />
            <Text
              style={[styles.navText, { color: theme.colors.textSecondary }]}
            >
              Wallet
            </Text>
          </View>
          <View style={styles.navItem}>
            <Image
              source={getImage('three-dot-circle-icon')}
              style={styles.navIcon}
            />
            <Text
              style={[styles.navText, { color: theme.colors.textSecondary }]}
            >
              More
            </Text>
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
  },
  scrollView: {
    flex: 1,
    marginBottom: 80, // Space for bottom nav
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
  },
  statusContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  gridContainer: {
    padding: 8,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
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
  },
});

export default HomeScreen;
