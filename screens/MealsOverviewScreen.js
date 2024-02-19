import React, {useLayoutEffect} from 'react';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealsList from '../components/MealList/MealsList';

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  const categoryTitle = CATEGORIES.find(
    category => category.id === catId,
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation, categoryTitle]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
