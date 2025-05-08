import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

type BackButtonProps = {
  goBack: () => void;
};

export default function BackButton({ goBack }: BackButtonProps) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  );
}
