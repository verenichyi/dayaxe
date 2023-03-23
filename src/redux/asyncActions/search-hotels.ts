import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleAxiosError } from '../../utils/handleAxiosErrors';
import { HotelPass } from '../../models/HotelPass/HotelPass';
import SearchHotelsService from '../../http/services/SearchHotelsService';

export const searchHotelPasses = createAsyncThunk<
  HotelPass[],
  { location: string; date: string },
  { rejectValue: string }
>('search-hotels/searchHotelPasses', async ({ location, date }, { rejectWithValue }) => {
  try {
    const { data } = await SearchHotelsService.searchHotels(location, date, date);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});
