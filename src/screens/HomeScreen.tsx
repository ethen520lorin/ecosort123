import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MetricCard } from '../components/MetricCard';
import { ScreenShell } from '../components/ScreenShell';
import { colors, radius, spacing, typography } from '../styles/theme';

export function HomeScreen(): React.ReactElement {
  return (
    <ScreenShell
      eyebrow="EcoSort mobile app"
      title="Smart recycling guide"
      subtitle="A context-aware mobile application for waste sorting, local council guidance, and privacy-first scan history."
    >
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>Today’s goal</Text>
        <Text style={styles.heroBody}>Build a reliable recycling workflow that works even when mobile data is limited.</Text>
      </View>
      <View style={styles.metricsRow}>
        <MetricCard label="Planned screens" value="6" caption="A1 design" />
        <MetricCard label="Sprint" value="1" caption="Foundation" />
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    borderRadius: radius.xl,
    padding: spacing.xl,
    backgroundColor: colors.black,
  },
  heroTitle: {
    ...typography.h2,
    color: colors.white,
  },
  heroBody: {
    ...typography.body,
    color: '#DDE8E0',
    marginTop: spacing.sm,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.md,
  },
});
