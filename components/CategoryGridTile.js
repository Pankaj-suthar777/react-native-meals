import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

const CategoryGridTile = ({title, color, onPress}) => {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        style={({pressed}) => [
          styles.btn,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{color: '#ccc'}}
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  btn: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //for ios
  buttonPressed: {
    opacity: 0.5,
  },
});

export default CategoryGridTile;
