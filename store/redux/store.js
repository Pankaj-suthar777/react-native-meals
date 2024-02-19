import {configureStore} from '@reduxjs/toolkit';

import favoirateSlice from './favoirateSlice';

export const store = configureStore({
  reducer: {
    favoirateMeals: favoirateSlice,
  },
});
