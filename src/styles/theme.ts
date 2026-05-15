import { TextStyle, ViewStyle } from 'react-native';

export const colors = {
  ink: '#10231C',
  inkMuted: '#53635D',
  surface: '#FFFFFF',
  surfaceWarm: '#F6F3EA',
  surfaceSoft: '#EEF5EF',
  border: '#DCE5DC',
  brand: '#15803D',
  brandDark: '#0F5132',
  warning: '#B7791F',
  danger: '#B42318',
  black: '#0E1512',
  white: '#FFFFFF',
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 22,
  xl: 28,
  xxl: 36,
};

export const radius = {
  sm: 12,
  md: 18,
  lg: 24,
  xl: 30,
  pill: 999,
};

export const typography = {
  eyebrow: {
    fontSize: 12,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    fontWeight: '800',
  } satisfies TextStyle,
  h1: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '900',
  } satisfies TextStyle,
  h2: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '900',
  } satisfies TextStyle,
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '800',
  } satisfies TextStyle,
  body: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  } satisfies TextStyle,
  small: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  } satisfies TextStyle,
};

export const shadow = {
  card: {
    shadowColor: '#0B1D14',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 3,
  } satisfies ViewStyle,
};
