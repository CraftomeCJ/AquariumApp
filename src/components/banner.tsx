import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,

} from 'react-native';
import { getImage } from './get-images';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height: deviceHeight, width: deviceWidth } =
  Dimensions.get('window');

const Header: React.FC = () => {
  const headerLogoSource = getImage('header-logo');
  const notificationIconSource = getImage('notification-ico');

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >
      <View style={styles.container}>
        <Image
          source={getImage('header-logo')}
          style={styles.logo}
        />
        <Image
          source={getImage('notification-ico')}
          style={styles.icon}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: deviceWidth,
    height: deviceHeight * 0.1,
    // paddingHorizontal: 16,
    backgroundColor: 'yellow',
  },

  logo: { width: 120, height: 40, resizeMode: 'contain' },
  icon: { width: 24, height: 24 },
});

export default Header;
