import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HotelPass } from '../../models/HotelPass/HotelPass';
import { getAllHotelPasses } from '../asyncActions/hotel-passes';

interface State {
  hotelPasses: HotelPass[];
  loading: boolean;
  success: boolean;
  error: string | null;
}

export const initialState: State = {
  hotelPasses: [],
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

const hotelPasses = createSlice({
  name: 'hotel-passes',
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
    builder.addCase(getAllHotelPasses.pending, (state) => {
      onPending(state);
    });
    builder.addCase(getAllHotelPasses.fulfilled, (state, action: PayloadAction<HotelPass[]>) => {
      onFulfilled(state);
      state.hotelPasses = action.payload;
    });

    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const hotelPassesActions = hotelPasses.actions;
export default hotelPasses.reducer;
