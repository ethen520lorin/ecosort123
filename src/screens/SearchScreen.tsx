import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../components/AppButton';
import { ScreenShell } from '../components/ScreenShell';
import { colors, radius, spacing, typography } from '../styles/theme';

export function SearchScreen(): React.ReactElement {
  return (
    <ScreenShell
      eyebrow="Manual fallback"
      title="Search waste items"
      subtitle="This screen will become the fallback route when camera scanning is unavailable or the item cannot be identified confidently."
    >
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Next implementation target</Text>
        <Text style={styles.body}>Add local council rules, autocomplete, common categories, and a result card with bin colour and instructions.</Text>
        <View style={styles.buttonWrap}>
          <AppButton label="Search workflow placeholder" onPress={() => undefined} />
        </View>
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
  },
  body: {
    ...typography.body,
    color: colors.inkMuted,
    marginTop: spacing.sm,
  },
  buttonWrap: {
    marginTop: spacing.lg,
  },
});
