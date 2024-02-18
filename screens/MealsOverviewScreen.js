import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  const categoryTitle = CATEGORIES.find(
    category => category.id === catId,
  ).title;

  function renderMealItem(itemData) {
    return (
      <MealItem
        title={itemData.item.title}
        imgUrl={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
      />
    );
  }
  useLayoutEffect(() => {
    navigation.setOption({
      title: categoryTitle,
    });
  }, [catId, navigation, categoryTitle]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
