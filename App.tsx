import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/utils/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <RecoilRoot>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </RecoilRoot>
    </ThemeProvider>
  );
}
