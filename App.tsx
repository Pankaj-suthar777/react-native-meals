import React from 'react';
import type {PropsWithChildren} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <CategoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});

export default App;
