import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '../styles/theme';
import { AppTab } from '../types/navigation';

type TabItem = {
  key: AppTab;
  label: string;
  icon: string;
};

const TABS: TabItem[] = [
  { key: 'home', label: 'Home', icon: '⌂' },
  { key: 'search', label: 'Search', icon: '⌕' },
  { key: 'history', label: 'History', icon: '◷' },
  { key: 'settings', label: 'Settings', icon: '⚙' },
];

type BottomTabBarProps = {
  activeTab: AppTab;
  onChange: (tab: AppTab) => void;
};

export function BottomTabBar({ activeTab, onChange }: BottomTabBarProps): React.ReactElement {
  return (
    <View style={styles.wrapper}>
      {TABS.map((tab) => {
        const active = tab.key === activeTab;
        return (
          <Pressable
            key={tab.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            accessibilityLabel={`Open ${tab.label}`}
            onPress={() => onChange(tab.key)}
            style={({ pressed }) => [styles.item, active && styles.itemActive, pressed && styles.pressed]}
          >
            <Text style={[styles.icon, active && styles.textActive]}>{tab.icon}</Text>
            <Text style={[styles.label, active && styles.textActive]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
    flexDirection: 'row',
    borderRadius: radius.xl,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.xs,
    shadowColor: '#0B1D14',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 22,
    elevation: 7,
  },
  item: {
    flex: 1,
    minHeight: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.lg,
    gap: 2,
  },
  itemActive: {
    backgroundColor: colors.surfaceSoft,
  },
  pressed: {
    opacity: 0.72,
  },
  icon: {
    fontSize: 20,
    color: colors.inkMuted,
  },
  label: {
    ...typography.small,
    fontSize: 11,
    color: colors.inkMuted,
  },
  textActive: {
    color: colors.brandDark,
    fontWeight: '900',
  },
});
