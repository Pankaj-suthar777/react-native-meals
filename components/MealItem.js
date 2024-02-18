import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const MealItem = ({title, imgUrl, duration, complexity, affordability}) => {
  return (
    <View style={styles.menuItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imgUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    margin: 16,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
  },
  // doing because of ios
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  //for ios
  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
