import React, { useState, useEffect } from "react";
import {
  getCurrentCondition,
  getDailyForecast,
  getHourlyForecast,
} from "../utils.js/request";
import moment from "moment/moment";
import { useParams } from "react-router-dom";

const Location = () => {
  const [currentCondition, setCurrentCondition] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState({});
  const [dailyForecast, setDailyForecast] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getCurrentCondition(id);
      setCurrentCondition(res);
    })();
    (async () => {
      const res = await getDailyForecast();
      setDailyForecast(res);
    })();
    (async () => {
      const res = await getHourlyForecast();
      console.log(res);
      setHourlyForecast(res);
    })();
  }, []);
  return (
    <>
      {Object.keys(currentCondition).length && (
        <div>
          <h2>{`${currentCondition.Temperature.Metric.Value}C (${currentCondition.Temperature.Imperial.Value}F)`}</h2>
          <h3>Philadelphia, PA</h3>
          <h4>
            {moment(currentCondition.LocalObservationDateTime).format(
              "MM/DD/YYYY hh:mm A"
            )}
          </h4>
        </div>
      )}

      {Object.keys(dailyForecast).length && (
        <table>
          <caption>{`Daily Forecast(${dailyForecast.Headline.Text})`}</caption>
          <tr>
            <th rowSpan="2">Date</th>
            <th colSpan="2">Temperature</th>
            <th colSpan="5">Day Weather</th>
            <th colSpan="5"> Night Weather</th>
          </tr>
          <tr>
            <th>MinTemp</th>
            <th>MaxTemp</th>
            <th>Icon</th>
            <th>IconPhrase</th>
            <th>Precipitation</th>
            <th>PrecipitationType</th>
            <th>PrecipitationIntensity</th>
            <th>Icon</th>
            <th>IconPhrase</th>
            <th>Precipitation</th>
            <th>PrecipitationType</th>
            <th>PrecipitationIntensity</th>
          </tr>
          {dailyForecast.DailyForecasts.map((dayForecast, index) => (
            <tr key={dayForecast.EpochDate}>
              <td>{moment(dayForecast.Date).format("YYYY/MM/DD")}</td>
              <td>{dayForecast.Temperature.Minimum.Value + "F"}</td>
              <td>{dayForecast.Temperature.Maximum.Value + "F"}</td>
              <td>{dayForecast.Day.Icon}</td>
              <td>{dayForecast.Day.IconPhrase}</td>
              <td>{dayForecast.Day.HasPrecipitation.toString()}</td>
              <td>{dayForecast.Day.PrecipitationType}</td>
              <td>{dayForecast.Day.PrecipitationIntensity}</td>
              <td>{dayForecast.Night.Icon}</td>
              <td>{dayForecast.Night.IconPhrase}</td>
              <td>{dayForecast.Night.HasPrecipitation.toString()}</td>
              <td>{dayForecast.Night.PrecipitationType}</td>
              <td>{dayForecast.Night.PrecipitationIntensity}</td>
            </tr>
          ))}
        </table>
      )}

      {hourlyForecast.length && (
        <table>
          <caption>{`Hourly Forecast`}</caption>
          <tr>
            <th>DateTime</th>
            <th>WeatherIcon</th>
            <th>IconPhrase</th>
            <th>HasPrecipitation</th>
            <th>IsDaylight</th>
            <th>Temperature</th>
            <th>PrecipitationProbability</th>
          </tr>

          {hourlyForecast.map((hourForecast, index) => (
            <tr key={hourForecast.EpochDate}>
              <td>{moment(hourForecast.DateTime).format(" hh:mm A")}</td>
              <td>{hourForecast.WeatherIcon}</td>
              <td>{hourForecast.IconPhrase}</td>
              <td>{hourForecast.HasPrecipitation.toString()}</td>
              <td>{hourForecast.IsDaylight.toString()}</td>
              <td>
                {hourForecast.Temperature.Value + hourForecast.Temperature.Unit}
              </td>
              <td>{hourForecast.PrecipitationProbability}</td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
};

export default Location;
