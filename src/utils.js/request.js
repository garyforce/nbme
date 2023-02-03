import axios from "axios";

const API_KEY = "OhyJ256EB3uyG7yd6YpMSUKbOA4Ma3At";
const LOCATION_KEY = "07753";

const getCurrentCondition = async (location = LOCATION_KEY) => {
  let result = null;
  try {
    const response = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${API_KEY}`
    );

    result = response.data;
    return result[0];
  } catch (error) {
    return error;
  }
};

const getFiveDayForecast = async (location = LOCATION_KEY) => {
  let result = null;
  try {
    const response = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${API_KEY}`
    );

    result = response.data;
    return result;
  } catch (error) {
    return error;
  }
};

const getDailyForecast = async (location = LOCATION_KEY) => {
  let result = null;
  try {
    const response = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${API_KEY}`
    );

    result = response.data;
    return result[0];
  } catch (error) {
    return error;
  }
};

const getHourlyForecast = async (location = LOCATION_KEY) => {
  let result = null;
  try {
    const response = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${API_KEY}`
    );

    result = response.data;
    return result[0];
  } catch (error) {
    return error;
  }
};

export {
  getCurrentCondition,
  getFiveDayForecast,
  getDailyForecast,
  getHourlyForecast,
};
