import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './features/countrySlice';

const store = configureStore({
  reducer: {
    country: countrySlice,
  },
});

export default store;
