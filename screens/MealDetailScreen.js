import React, {useLayoutEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetailData from '../components/MealDetailData';
import List from '../components/List';
import IconButton from '../components/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/redux/favoirateSlice';

const MealDetailScreen = ({route, navigation}) => {
  const favoriteMealIds = useSelector(state => state.favoirateMeals.ids);
  console.log(favoriteMealIds);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealsIsFavorite = favoriteMealIds.includes(mealId);

  function faviorateButtonHandler() {
    if (mealsIsFavorite) {
      dispatch(removeFavorite({id: mealId}));
    } else {
      dispatch(addFavorite({id: mealId}));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({color, size}) => (
        <IconButton
          icon={mealsIsFavorite ? 'star' : 'staro'}
          onPress={faviorateButtonHandler}
        />
      ),
    });
  }, [navigation, faviorateButtonHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetailData
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          <List selectedMeal={selectedMeal.ingredients} />
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          <List selectedMeal={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  detailText: {
    color: 'white',
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBlockColor: '#e2b497',
    borderBottomWidth: 2,
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});

export default MealDetailScreen;
