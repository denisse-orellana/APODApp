import axios from "axios";
import { START_DATE, BASE_URL_APOD, BASE_API_KEY, BASE_URL_SEARCH, MEDIA_TYPE } from '../config.js';

export class NasaAPI {
  static async fetchAPOD() {
    try {
      const response = await axios.get(BASE_URL_APOD, {
        params: {
          api_key: BASE_API_KEY,
          start_date: START_DATE
        },
      })
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchByQuery(query) {
    try {
      const response = await axios.get(`${BASE_URL_SEARCH}/search`, {
        params: {
          q: query,
          media_type: MEDIA_TYPE
        },
      })
      return response.data.collection.items;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchCollectionVideo(url) {
    try {
      const response = await axios.get(url)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}