import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from '../../models/Hotels/Hotel';
import { getAllHotels } from '../asyncActions/hotels';

interface State {
  hotels: Hotel[];
  loading: boolean;
  success: boolean;
  error: string | null;
}

export const initialState: State = {
  hotels: [],
  loading: false,
  success: false,
  error: null,
};

const onPending = (state: State) => {
  state.loading = true;
  state.error = null;
  state.success = false;
};

const isError = (action: AnyAction) => action.type.endsWith('rejected');

const onFulfilled = (state: State) => {
  state.loading = false;
  state.success = true;
};

const hotels = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    resetSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllHotels.pending, (state) => {
      onPending(state);
    });
    builder.addCase(getAllHotels.fulfilled, (state, action: PayloadAction<Hotel[]>) => {
      onFulfilled(state);
      state.hotels = action.payload;
    });

    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const hotelsActions = hotels.actions;
export default hotels.reducer;
