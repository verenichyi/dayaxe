import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleAxiosError } from '../../utils/handleAxiosErrors';
import HotelsService from '../../http/services/HotelsService';
import { Hotel } from '../../models/Hotels/Hotel';

export const getAllHotels = createAsyncThunk<Hotel[], void, { rejectValue: string }>(
  'hotels/getAllHotels',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await HotelsService.getAllHotels();
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);
