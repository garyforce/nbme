import axios from "axios";

const API_KEY = "OhyJ256EB3uyG7yd6YpMSUKbOA4Ma3At";
const LOCATION_KEY = 07753;

const getCurrentCondition = async (location = LOCATION_KEY) => {
  axios
    .get(
      `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${API_KEY}`
    )
    .then((res) => {
      return res.data;
    });
};

const getFiveDayForecast = async (location = LOCATION_KEY) => {
  axios
    .get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${API_KEY}`
    )
    .then((res) => {
      return res.data;
    });
};

const getDailyForecast = async (location = LOCATION_KEY) => {
  axios
    .get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${API_KEY}`
    )
    .then((res) => {
      return res.data;
    });
};

const getHourlyForecast = async (location = LOCATION_KEY) => {
  axios
    .get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${API_KEY}`
    )
    .then((res) => {
      return res.data;
    });
};

export {
  getCurrentCondition,
  getFiveDayForecast,
  getDailyForecast,
  getHourlyForecast,
};
