import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BottomTabBar } from './src/components/BottomTabBar';
import { HomeScreen } from './src/screens/HomeScreen';
import { HistoryScreen } from './src/screens/HistoryScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { colors } from './src/styles/theme';
import { AppTab } from './src/types/navigation';

export default function App(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<AppTab>('home');

  const renderScreen = (): React.ReactElement => {
    switch (activeTab) {
      case 'search':
        return <SearchScreen />;
      case 'history':
        return <HistoryScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'home':
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.shell}>{renderScreen()}</View>
      <BottomTabBar activeTab={activeTab} onChange={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surfaceWarm,
  },
  shell: {
    flex: 1,
  },
});
