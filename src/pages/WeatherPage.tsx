import { Card } from '@/components/Card';
import { useWeather } from '@/hooks/useWeather';
import { Weather } from '@/types/Weather';
import { useEffect, useState } from 'react';
import styles from './WeatherPage.module.scss';

export const WeatherPage: React.FC = () => {
  const [data, setData] = useState<Weather | undefined>(undefined);
  const { fetchWeather } = useWeather();

  const fetchWeatherData = async () => {
    const data = await fetchWeather('tokyo');
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className={styles['weather']}>
      <p className={styles['title']}>お天気アプリ</p>
      <Card data={data} />
    </div>
  );
};
