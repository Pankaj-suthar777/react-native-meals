import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {MEALS} from '../data/dummy-data';
import MealsList from '../components/MealList/MealsList';

const FavoirateScreen = () => {
  const favoriteMealIds = useSelector(state => state.favoirateMeals.ids);

  const favoirateMeals = MEALS.filter(meal =>
    favoriteMealIds.includes(meal.id),
  );

  if (favoirateMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favoirate meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoirateMeals} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#dfda68',
    fontSize: 20,
  },
});

export default FavoirateScreen;
