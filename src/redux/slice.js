import { createSlice } from '@reduxjs/toolkit';
import { getAdvertsThunk, getAllAdvertsThunk } from './operations';

const initialState = {
  allAdverts: [],
  adverts: [],
  favorites: [],
  isLoading: false,
  error: null,
  loadMore: true,
  clickCardId: '',
  select: '',
  filters: {},
};

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setLoadMore: (state, { payload }) => {
      state.loadMore = payload;
    },
    setFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(({ id }) => id !== payload);
    },
    changeClickCardId: (state, { payload }) => {
      state.clickCardId = payload;
    },
    changeSelectFilter: (state, { payload }) => {
      if (payload.length < 12) {
        state.loadMore = false;
        state.select = payload;
      } else {
        state.select = payload;
      }
    },
    changeFilters: (state, { payload }) => {
      state.filters = payload;
    },
    changeFirstLoad: (state, { payload }) => {
      state.firstLoad = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
        if (payload.length < 12) {
          state.loadMore = false;
        }
        state.adverts.push(...payload);
      })
      .addCase(getAllAdvertsThunk.pending, onPending)
      .addCase(getAllAdvertsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allCars = payload;
        state.error = null;
      })
      .addCase(getAllAdvertsThunk.rejected, onRejected);
  },
});

export const {
  setLoadMore,
  setFavorites,
  removeFavorites,
  changeClickCardId,
  changeSelectFilter,
  changeFilters,
  changeFirstLoad,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
