import { $api } from '../api';
import { AxiosResponse } from 'axios';
import { HotelPass } from '../../models/HotelPass/HotelPass';

const hotelPassesPath = '/hotel-passes/public';

export default class HotelPassesService {
  static async getAllHotelPasses(): Promise<AxiosResponse<HotelPass[]>> {
    return $api.get<HotelPass[]>(hotelPassesPath);
  }
}
