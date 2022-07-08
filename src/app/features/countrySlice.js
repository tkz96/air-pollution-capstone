import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountryInfo = createAsyncThunk(
  'countryInfo/getCountryInfo',
  async (x) => {
    const response = await fetch(x);
    const countryInfo = await response.json();
    return countryInfo.list[0].components;
  },
);

const countrySlice = createSlice({
  name: 'country',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchCountryInfo.fulfilled]: (state, action) => action.payload,
  },
});

export default countrySlice.reducer;
