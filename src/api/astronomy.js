import axios from "axios";
import { START_DATE, BASE_URL, BASE_API_KEY} from '../config.js';

export class NasaAPI {
  static async fetchAPOD() {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          api_key: BASE_API_KEY,
          start_date: START_DATE
        },
      })
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}