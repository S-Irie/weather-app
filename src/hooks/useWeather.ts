import { Weather } from '@/types/Weather';
import axios, { AxiosResponse } from 'axios';

const url = import.meta.env.VITE_WEATHER_API_BASE_URL;
const key = import.meta.env.VITE_WEATHER_API_KEY;

export const useWeather = () => {
  const fetchWeather = async (city: string): Promise<Weather> => {
    try {
      const response: AxiosResponse = await axios.get(url, {
        params: {
          q: city,
          appid: key,
          units: 'metric',
          lang: 'ja',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching weather data' + error);
    }
  };

  return { fetchWeather };
};
