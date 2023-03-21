import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../http/services/UserService';
import { FavoriteHotelPassDto, LoginUserDto, RegisterUserDto } from '../../models/User/UserDto';
import { AuthResponse } from '../../models/Auth/authResponse';
import { handleAxiosError } from '../../utils/handleAxiosErrors';
import { User } from '../../models/User/User';

export const registerUser = createAsyncThunk<
  AuthResponse,
  RegisterUserDto,
  { rejectValue: string }
>('user/registration', async (body, { rejectWithValue }) => {
  try {
    const { data } = await UserService.signUp(body);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const loginUser = createAsyncThunk<AuthResponse, LoginUserDto, { rejectValue: string }>(
  'user/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await UserService.signIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const checkAuth = createAsyncThunk<AuthResponse, void, { rejectValue: string }>(
  'user/check',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await UserService.check();
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const addHotelPassToFavorites = createAsyncThunk<
  User,
  { userId: string; body: FavoriteHotelPassDto },
  { rejectValue: string }
>('user/addHotelPassToFavorites', async ({ userId, body }, { rejectWithValue }) => {
  try {
    const { data } = await UserService.addHotelPassToFavorites(userId, body);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const deleteHotelPassFomFavorites = createAsyncThunk<
  User,
  { userId: string; body: FavoriteHotelPassDto },
  { rejectValue: string }
>('user/deleteHotelPassFomFavorites', async ({ userId, body }, { rejectWithValue }) => {
  try {
    const { data } = await UserService.deleteHotelPassFomFavorites(userId, body);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});
