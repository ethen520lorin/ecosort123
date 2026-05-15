import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from './src/theme/theme';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View>
          <Text style={styles.logo}>EcoSort</Text>
          <Text style={styles.title}>Smart recycling guide</Text>
          <Text style={styles.description}>
            Search local recycling rules, check disposal guidance, and keep a simple history of everyday recycling actions.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Built for everyday sorting</Text>
          <Text style={styles.cardText}>
            EcoSort focuses on clear guidance, privacy-aware design, and an offline-friendly experience for common waste items.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.86} accessibilityRole="button" accessibilityLabel="Get started">
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.canvas },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 58, paddingBottom: 32, justifyContent: 'space-between' },
  logo: { fontSize: 20, fontWeight: '900', color: theme.colors.primary, marginBottom: 28 },
  title: { ...theme.typography.display, color: theme.colors.text, marginBottom: 16 },
  description: { ...theme.typography.body, color: theme.colors.textMuted, maxWidth: 340 },
  card: { backgroundColor: theme.colors.surface, borderRadius: 26, padding: 22, borderWidth: 1, borderColor: theme.colors.border, ...theme.shadow.card },
  cardTitle: { ...theme.typography.h2, color: theme.colors.text, marginBottom: 8 },
  cardText: { ...theme.typography.body, color: theme.colors.textMuted },
  button: { minHeight: 54, borderRadius: 18, backgroundColor: theme.colors.primary, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: theme.colors.white, fontSize: 16, fontWeight: '900' },
});
