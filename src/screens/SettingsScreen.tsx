import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenShell } from '../components/ScreenShell';
import { colors, radius, spacing, typography } from '../styles/theme';

export function SettingsScreen(): React.ReactElement {
  return (
    <ScreenShell
      eyebrow="Accessibility"
      title="Settings"
      subtitle="This area will support privacy controls, theme preferences, text size, and offline demonstration mode."
    >
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Planned controls</Text>
        <Text style={styles.item}>✓ Privacy-first mode</Text>
        <Text style={styles.item}>✓ Offline demo mode</Text>
        <Text style={styles.item}>✓ Text-size and accessibility controls</Text>
        <Text style={styles.item}>✓ Rule cache sync status</Text>
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    ...typography.title,
    color: colors.ink,
    marginBottom: spacing.sm,
  },
  item: {
    ...typography.body,
    color: colors.inkMuted,
    marginTop: spacing.xs,
  },
});
