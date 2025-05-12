import React from 'react';
import { ImageBackground, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';

type BackgroundProps = {
  children: React.ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const image = require('../../assets/background_dot.png');

  return (
    <ImageBackground
      source={image}
      resizeMode="repeat"
      style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Background;
