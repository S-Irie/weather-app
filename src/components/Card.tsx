import lottieCloud from '@/assets/lottie/cloud.json';
import lottieRain from '@/assets/lottie/rain.json';
import lottieSnow from '@/assets/lottie/snow.json';
import lottieSun from '@/assets/lottie/sun.json';
import { Weather } from '@/types/Weather';
import { useLottie } from 'lottie-react';
import styles from './Card.module.scss';

type Props = {
  data?: Weather;
};

const getLottieData = (weather: string | undefined) => {
  switch (weather) {
    case 'Thunderstorm': // 雷雨
      return lottieRain;
    case 'Drizzle': // 霧雨
      return lottieRain;
    case 'Rain': // 雨
      return lottieRain;
    case 'Snow': // 雪
      return lottieSnow;
    case 'Squall': // 突風
      return lottieRain;
    case 'Tornado': // 竜巻
      return lottieRain;
    case 'Clear': // 晴れ
      return lottieSun;
    case 'Clouds': // 曇り
      return lottieCloud;
    default: // その他
      return lottieCloud;
  }
};

const getWeatherName = (weather: string | undefined) => {
  switch (weather) {
    case 'Thunderstorm': // 雷雨
      return '雷雨';
    case 'Drizzle': // 霧雨
      return '霧雨';
    case 'Rain': // 雨
      return '雨';
    case 'Snow': // 雪
      return '雪';
    case 'Squall': // 突風
      return '突風';
    case 'Tornado': // 竜巻
      return '竜巻';
    case 'Clear': // 晴れ
      return '晴れ';
    case 'Clouds': // 曇り
      return '曇り';
    default: // その他
      return '曇り';
  }
};

export const Card: React.FC<Props> = ({ data }) => {
  const weather = data?.weather[0].main;

  const options = {
    animationData: getLottieData(weather),
    loop: true,
  };
  const { View } = useLottie(options);

  // 現在日を取得
  const now = new Date();
  const dateTime = `${now.getFullYear()}年${
    now.getMonth() + 1
  }月${now.getDate()}日`;

  return (
    <div className={styles['card']}>
      {data && (
        <>
          <p className={styles['city']}>{data.name}</p>
          <p className={styles['time']}>{dateTime}</p>
          <div className={styles['contents']}>
            <div className={styles['weather']}>
              <div className={styles['text']}>
                {getWeatherName(data.weather[0].main)}
              </div>
              <div className={styles['icon']}>{View}</div>
            </div>
            <div className={styles['info']}>
              <p>{`気温：${data.main.temp}℃`}</p>
              <p>{`最高気温：${data.main.temp_max}℃`}</p>
              <p>{`最低気温：${data.main.temp_min}℃`}</p>
              <p>{`湿度：${data.main.humidity}%`}</p>
              <p>{`気圧：${data.main.pressure}hPa`}</p>
              <p>{`風速：${data.wind.speed}m/s`}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
