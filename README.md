# Aquarium App - React Native

A React Native application that provides an interactive experience for aquarium visitors. The app includes features such as navigation, theme support, and various UI components to enhance user engagement.

---

## Features

- **Navigation**: Stack navigation for seamless screen transitions.
- **Theme Support**: Customizable themes using a context provider.
- **Reusable Components**: Modular components for quick links, status cards, and more.
- **State Management**: Uses Recoil for global state management.
- **Offline Support**: Caches images locally for offline use.

---

## Objectives Met

| Objective                  | Status  | Implementation Details |
|----------------------------|---------|------------------------|
| **Navigation**             | ✅       | - Stack navigation for screen transitions. |
| **Theme Support**          | ✅       | - Context provider for theme management.<br>- Custom hooks for accessing theme. |
| **Reusable Components**    | ✅       | - Modular components for quick links, status cards, etc. |
| **State Management**       | ✅       | - Recoil for global state management. |
| **Offline Support**        | ✅       | - Caching images locally for offline use. |

---

## File Structure
```markdown
# Aquarium App - React Native

A React Native application that provides an interactive experience for aquarium visitors. The app includes features such as navigation, theme support, and various UI components to enhance user engagement.

---

## Features

- **Navigation**: Stack navigation for seamless screen transitions.
- **Theme Support**: Customizable themes using a context provider.
- **Reusable Components**: Modular components for quick links, status cards, and more.
- **State Management**: Uses Recoil for global state management.
- **Offline Support**: Caches images locally for offline use.

---

## Objectives Met

| Objective                  | Status  | Implementation Details |
|----------------------------|---------|------------------------|
| **Navigation**             | ✅       | - Stack navigation for screen transitions. |
| **Theme Support**          | ✅       | - Context provider for theme management.<br>- Custom hooks for accessing theme. |
| **Reusable Components**    | ✅       | - Modular components for quick links, status cards, etc. |
| **State Management**       | ✅       | - Recoil for global state management. |
| **Offline Support**        | ✅       | - Caching images locally for offline use. |

---

## File Structure

```
src/
├── components/        # Reusable UI components
├── constants/         # Constant values
├── navigation/        # React Navigation setup
├── screens/           # Screen components
├── types/             # TypeScript types
├── utils/             # Utility functions
```

---

## Key Files

### 1. **Theme Provider** (`ThemeProvider.tsx`)
- **Description**: Provides theme context to the application.
- **Key Features**:
  - Customizable themes.
  - Context provider and custom hook for accessing theme.
- **Example**:
  ```tsx
  export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <ThemeContext.Provider value={defaultTheme}>
        {children}
      </ThemeContext.Provider>
    );
  };
  ```

### 2. **Navigation** (`AppNavigator.tsx`)
- **Description**: Handles screen transitions using React Navigation.
- **Key Features**:
  - Stack navigation for `HomeScreen` and `DetailScreen`.
- **Example**:
  ```tsx
  const Stack = createStackNavigator<RootStackParamList>();
  const AppNavigator = () => (
    <Stack.Navigator initialRouteName="HOME">
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="DETAILS" component={DetailScreen} />
    </Stack.Navigator>
  );
  ```

### 3. **Reusable Components** (`header.tsx`, quick-link-items.tsx, etc.)
- **Description**: Modular components for various UI elements.
- **Key Features**:
  - Header, quick link items, status cards, etc.
- **Example**:
  ```tsx
  const Header: React.FC = () => (
    <View style={styles.header}>
      <Image source={getImage('header-logo')} />
      <Text style={styles.headerSubtitle}>Don't miss our daily Dive Feeding!</Text>
      <Image source={getImage('notification-icon')} style={styles.notificationIcon} />
    </View>
  );
  ```

### 4. **State Management** (`navigation.ts`)
- **Description**: Manages navigation state using TypeScript types.
- **Key Features**:
  - Type definitions for navigation parameters.
- **Example**:
  ```ts
  export type RootStackParamList = {
    HOME: undefined;
    DETAILS: undefined;
  };
  ```

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/AquariumApp.git
   cd AquariumApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm run android
   ```

---

## Testing [[WIP]]

### Unit Tests
- **Components**: Test UI components like `Header`, `QuickLinkItem`.

### Integration Tests
- **Navigation**: Test screen transitions.
- **State Management**: Test Recoil state updates.

Run tests with:
```bash
npm test
```

---

## Technologies Used

- **React Native**: For building the mobile app.
- **Recoil**: For state management.
- **React Navigation**: For screen transitions.
- **TypeScript**: For type safety.
- **AsyncStorage**: For local data persistence.

---

## Future Improvements

1. **Advanced Caching**: Improve offline support with better caching strategies.
2. **Unit Tests**: Add more test coverage for components and hooks.
3. **UI Enhancements**: Improve UI/UX with animations and better layouts.
4. **Error Handling**: Add retry mechanisms for failed API calls.

---
