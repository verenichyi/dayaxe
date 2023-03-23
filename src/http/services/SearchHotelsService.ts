import { $api } from '../api';
import { AxiosResponse } from 'axios';
import { HotelPass } from '../../models/HotelPass/HotelPass';

const searchHotelsPath = '/hotel-passes/search';

export default class SearchHotelsService {
  static async searchHotels(
    location: string,
    startDate: string,
    endDate: string
  ): Promise<AxiosResponse<HotelPass[]>> {
    return $api.get<HotelPass[]>(
      `${searchHotelsPath}?location=${location}&startDate=${startDate}&endDate=${endDate}`
    );
  }
}
