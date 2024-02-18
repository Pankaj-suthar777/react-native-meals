import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import {FlatList, StyleSheet, View} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoriesScreen;
