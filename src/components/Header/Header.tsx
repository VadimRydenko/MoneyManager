import React from 'react';
import { Text } from 'react-native-paper';
import { styles } from './styles';

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <Text style={styles.header}>{children}</Text>;
}
