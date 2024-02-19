import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const List = ({selectedMeal}) => {
  return selectedMeal.map(ingredient => (
    <View key={ingredient} style={styles.listItem}>
      <Text style={styles.itemText}>{ingredient}</Text>
    </View>
  ));
};
const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingVertical: 4,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});

export default List;
