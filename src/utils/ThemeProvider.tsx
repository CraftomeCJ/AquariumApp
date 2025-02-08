import React, { createContext, useContext } from 'react';
import { StyleSheet } from 'react-native';

// Define the Theme interface
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    link: string;
    background: string;
    cardBackground: string;
    borderColor: string;
  };
  spacing: {
    padding: number;
    margin: number;
  };
  typography: {
    headerTitle: {
      fontSize: number;
      fontWeight: string;
      color: string;
    };
    sectionTitle: {
      fontSize: number;
      fontWeight: string;
      color: string;
    };
    buttonText: {
      fontSize: number;
      color: string;
      textAlign: string;
    };
    navText: {
      fontSize: number;
      color: string;
    };
  };
  layout: {
    safeArea: {
      flex: number;
    };
    container: {
      flex: number;
      backgroundColor: string;
    };
    scrollView: {
      flex: number;
      marginBottom: number;
    };
    header: {
      flexDirection: string;
      alignItems: string;
      padding: number;
      backgroundColor: string;
    };
    bottomNav: {
      position: string;
      bottom: number;
      left: number;
      right: number;
      flexDirection: string;
      justifyContent: string;
      paddingVertical: number;
      backgroundColor: string;
      borderTopWidth: number;
      borderTopColor: string;
    };
  };
}

// Define the default theme
const defaultTheme: Theme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#F8F8F8',
    textPrimary: '#333333',
    textSecondary: '#666666',
    accent: '#FF5A5F',
    link: '#007AFF',
    background: '#FFFFFF',
    cardBackground: '#F5F5F5',
    borderColor: '#DDDDDD',
  },
  spacing: {
    padding: 16,
    margin: 8,
  },
  typography: {
    headerTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333333',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#222222',
    },
    buttonText: {
      fontSize: 12,
      color: '#FF5A5F',
      textAlign: 'center',
    },
    navText: {
      fontSize: 12,
      color: '#444444',
    },
  },
  layout: {
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
  },
};

// Create the context
const ThemeContext = createContext<Theme>(defaultTheme);

// Create the ThemeProvider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
