import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleAxiosError } from '../../utils/handleAxiosErrors';
import { HotelPass } from '../../models/HotelPass/HotelPass';
import HotelPassesService from '../../http/services/HotelPassesService';

export const getAllHotelPasses = createAsyncThunk<HotelPass[], void, { rejectValue: string }>(
  'hotel-passes/getAllHotelPasses',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await HotelPassesService.getAllHotelPasses();
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
