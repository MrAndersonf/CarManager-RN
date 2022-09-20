import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientProps {
  children: React.ReactNode[] | React.ReactNode;
}

export const Gradient = ({ children }: GradientProps) => {
  return <View style={styles.linearGradient}>{children}</View>;
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0B3A7A',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: '#fff',
  },
});
