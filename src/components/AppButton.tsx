import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius, spacing, typography } from '../styles/theme';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  loading?: boolean;
};

export function AppButton({ label, onPress, variant = 'primary', disabled = false, loading = false }: AppButtonProps): React.ReactElement {
  const isPrimary = variant === 'primary';
  const isDanger = variant === 'danger';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      disabled={disabled || loading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isPrimary && styles.primary,
        !isPrimary && styles.secondary,
        isDanger && styles.danger,
        (pressed || disabled) && styles.pressed,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? colors.white : colors.ink} />
      ) : (
        <Text style={[styles.label, isPrimary && styles.primaryLabel, isDanger && styles.dangerLabel]}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 54,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  primary: {
    backgroundColor: colors.brandDark,
    borderColor: colors.brandDark,
  },
  secondary: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
  },
  danger: {
    backgroundColor: colors.surface,
    borderColor: '#F4B4AB',
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
  label: {
    ...typography.title,
    fontSize: 16,
    color: colors.ink,
  },
  primaryLabel: {
    color: colors.white,
  },
  dangerLabel: {
    color: colors.danger,
  },
});
