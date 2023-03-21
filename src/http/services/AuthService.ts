import { AxiosResponse } from 'axios';
import { $api, $authApi } from '../api';
import { LoginUserDto, RegisterUserDto } from '../../models/User/UserDto';
import { AuthResponse } from '../../models/Auth/authResponse';

const signUpPath = '/public-auth/registration';
const signInPath = '/public-auth/login';
const checkPath = '/public-auth/check';

export default class AuthService {
  static async signUp(body: RegisterUserDto): Promise<AxiosResponse<AuthResponse>> {
    return $api.post(signUpPath, body);
  }

  static async signIn(body: LoginUserDto): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>(signInPath, body);
  }

  static async check(): Promise<AxiosResponse<AuthResponse>> {
    return $authApi.get<AuthResponse>(checkPath);
  }
}
