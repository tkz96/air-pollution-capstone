import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'af2778309f98e0c5d550f18b1778fb20';
const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution';

export const fetchCountryInfo = createAsyncThunk(
  'countryInfo/getCountryInfo',
  async (lat, lon) => {
    const response = await fetch(`${baseURL}?lat=41&lon=20&appid=${apiKey}`);
    console.log(`this is from router: ${lat} ${lon}`);
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
