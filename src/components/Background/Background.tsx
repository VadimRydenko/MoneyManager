import React from 'react';
import { ImageBackground, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';

type BackgroundProps = {
  children: React.ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground
      source={require('../../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
