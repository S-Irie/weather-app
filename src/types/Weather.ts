export type Weather = {
  coord: {
    lon: number; // 都市の地理的位置、経度
    lat: number; // 都市の地理的位置、経度
  };
  weather: [
    {
      id: number; // 気象条件ID
      main: string; // 気象パラメータ群（雨、雪、異常気象など）
      description: string; // グループ内の気象条件
      icon: string; // 天気アイコンID
    },
  ];
  base: string; // 内部パラメータ
  main: {
    temp: number; // 気温
    feels_like: number; // 体感温度
    temp_min: number; // 現時点での最低気温。現在観測されている最低気温
    temp_max: number; // 現時点での最高気温
    pressure: number; // 大気圧
    humidity: number; // 湿度
  };
  visibility: number; // 視認性
  wind: {
    speed: number; // 風速(m/s)
    deg: number; // 風向き(度)
  };
  clouds: {
    all: number; // 曇り度
  };
  dt: number; // データ算出時刻
  sys: {
    type: number; // 内部パラメータ
    id: number; // 内部パラメータ
    country: string; // 国コード
    sunrise: number; // 日の出時刻、Unix、UTC
    sunset: number; // 日没時刻、Unix、UTC
  };
  timezone: number; // UTCからのシフト
  id: number; // 都市ID
  name: string; // 都市名
  cod: number; // 内部パラメータ
};
