import { RootState } from './index';

export const selectAuth = (state: RootState) => state.auth;
export const selectHotels = (state: RootState) => state.hotels;
export const selectHotelPasses = (state: RootState) => state.hotelPasses;
export const selectSearchHotels = (state: RootState) => state.searchHotels;
