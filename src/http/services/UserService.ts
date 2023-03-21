import { AxiosResponse } from 'axios';
import { $api, $authApi } from '../api';
import {
  FavoriteHotelPassDto,
  LoginUserDto,
  RegisterUserDto
} from "../../models/User/UserDto";
import { AuthResponse } from '../../models/Auth/authResponse';
import { User } from "../../models/User/User";

const signUpPath = '/public-auth/registration';
const signInPath = '/public-auth/login';
const checkPath = '/public-auth/check';
const favoriteHotelPassPath = '/public-users/favorite-hotel-pass';

export default class UserService {
  static async signUp(body: RegisterUserDto): Promise<AxiosResponse<AuthResponse>> {
    return $api.post(signUpPath, body);
  }

  static async signIn(body: LoginUserDto): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>(signInPath, body);
  }

  static async check(): Promise<AxiosResponse<AuthResponse>> {
    return $authApi.get<AuthResponse>(checkPath);
  }

  static async addHotelPassToFavorites(
    userId: string,
    body: FavoriteHotelPassDto
  ): Promise<AxiosResponse<User>> {
    return $api.patch<User>(`${favoriteHotelPassPath}/${userId}/add`, body);
  }

  static async deleteHotelPassFomFavorites(
    userId: string,
    body: FavoriteHotelPassDto
  ): Promise<AxiosResponse<User>> {
    return $api.patch<User>(`${favoriteHotelPassPath}/${userId}/delete`, body);
  }
}
