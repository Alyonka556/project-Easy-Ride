import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://65a9960b219bfa3718697f8a.mockapi.io/';

export const getAllAdvertsThunk = createAsyncThunk(
  'adverts/get',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`adverts`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAdvertsThunk = createAsyncThunk(
  'pagination/get',
  async (page, thunkApi) => {
    try {
      const { data } = await axios.get(`adverts?page=${page}&limit=12`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
