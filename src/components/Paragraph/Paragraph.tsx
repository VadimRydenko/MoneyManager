import React from 'react';
import { Text } from 'react-native-paper';
import { styles } from './styles';

interface ParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return <Text style={styles.text}>{children}</Text>;
}
