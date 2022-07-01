import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { finalUrl } from '../../Pages/CountryInfo';

export const fetchCountryInfo = createAsyncThunk(
  'countryInfo/getCountryInfo',
  async (x) => {
    const response = await fetch(x);
    const countryInfo = response.json();
    return countryInfo;
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
