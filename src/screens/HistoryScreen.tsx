import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenShell } from '../components/ScreenShell';
import { colors, radius, spacing, typography } from '../styles/theme';

export function HistoryScreen(): React.ReactElement {
  return (
    <ScreenShell
      eyebrow="Persistent data"
      title="Scan history"
      subtitle="Assessment 4 will use local storage first, then optional Firebase sync."
    >
      <View style={styles.emptyState}>
        <Text style={styles.emptyIcon}>◷</Text>
        <Text style={styles.emptyTitle}>No scans yet</Text>
        <Text style={styles.emptyBody}>History will appear here after the manual search and storage workflow is implemented.</Text>
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  emptyState: {
    borderRadius: radius.xl,
    padding: spacing.xl,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  emptyIcon: {
    fontSize: 42,
    color: colors.brandDark,
  },
  emptyTitle: {
    ...typography.title,
    color: colors.ink,
    marginTop: spacing.sm,
  },
  emptyBody: {
    ...typography.body,
    color: colors.inkMuted,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
});
