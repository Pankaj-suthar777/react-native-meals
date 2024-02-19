import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {Pressable, StyleSheet} from 'react-native';

const IconButton = ({icon, onPress}) => {
  const myIcon = <Icon name={icon} size={24} color="#fff" />;
  return (
    <Pressable
      android_ripple={{backgroundColor: 'gray'}}
      style={({pressed}) => pressed && styles.pressed}
      onPress={onPress}>
      {myIcon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
