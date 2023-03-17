import { $api } from '../api';
import { AxiosResponse } from 'axios';
import { Hotel } from '../../models/Hotels/Hotel';

const hotelsPath = '/hotels/public';

export default class HotelsService {
  static async getAllHotels(): Promise<AxiosResponse<Hotel[]>> {
    return $api.get<Hotel[]>(hotelsPath);
  }
}
