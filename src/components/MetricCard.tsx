import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '../styles/theme';

type MetricCardProps = {
  label: string;
  value: string;
  caption?: string;
};

export function MetricCard({ label, value, caption }: MetricCardProps): React.ReactElement {
  return (
    <View style={styles.card} accessibilityRole="summary">
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
      {caption ? <Text style={styles.caption}>{caption}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 112,
    borderRadius: radius.lg,
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'space-between',
  },
  value: {
    ...typography.h2,
    color: colors.brandDark,
  },
  label: {
    ...typography.small,
    color: colors.ink,
  },
  caption: {
    ...typography.small,
    color: colors.inkMuted,
    marginTop: spacing.xs,
  },
});
