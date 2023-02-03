import React, { useEffect, useState } from "react";
import { getCurrentCondition, getFiveDayForecast } from "../utils.js/request";
import moment from "moment/moment";

import "./home.css";

const Home = () => {
  const [currentCondition, setCurrentCondition] = useState({});
  const [forecast, setForecast] = useState({});
  useEffect(() => {
    (async () => {
      const res = await getCurrentCondition();
      setCurrentCondition(res);
    })();
    (async () => {
      const res = await getFiveDayForecast();
      console.log(res);
      setForecast(res);
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
      {Object.keys(forecast).length && (
        <table>
          <caption>{`5 Day Weather Forecast(${forecast.Headline.Text})`}</caption>
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
          {forecast.DailyForecasts.map((dayForecast, index) => (
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
        // <Paper sx={{ width: "100%" }}>
        //   <TableContainer sx={{ maxHeight: 440 }}>
        //     <Table stickyHeader aria-label="sticky table">
        //       <TableHead>
        //         <TableRow>
        //           <TableCell align="center" colSpan={3}>
        //             Min
        //           </TableCell>
        //           <TableCell align="center" colSpan={3}>
        //             Max
        //           </TableCell>
        //         </TableRow>
        //         <TableRow>
        //           <TableCell align="center" colSpan={3}>
        //             Min
        //           </TableCell>
        //           <TableCell align="center" colSpan={3}>
        //             Max
        //           </TableCell>
        //           <TableCell align="center" colSpan={3}>
        //             IconPhrase
        //           </TableCell>
        //           <TableCell align="center" colSpan={3}>
        //             HasPrecipitation
        //           </TableCell>
        //           <TableCell align="center" colSpan={3}>
        //             PrecipitationType
        //           </TableCell>
        //           <TableCell align="center" colSpan={3}>
        //             PrecipitationIntensity
        //           </TableCell>
        //         </TableRow>
        //       </TableHead>
        //       <TableBody>
        //         {rows
        //           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        //           .map((row) => {
        //             return (
        //               <TableRow
        //                 hover
        //                 role="checkbox"
        //                 tabIndex={-1}
        //                 key={row.code}
        //               >
        //                 {columns.map((column) => {
        //                   const value = row[column.id];
        //                   return (
        //                     <TableCell key={column.id} align={column.align}>
        //                       {column.format && typeof value === "number"
        //                         ? column.format(value)
        //                         : value}
        //                     </TableCell>
        //                   );
        //                 })}
        //               </TableRow>
        //             );
        //           })}
        //       </TableBody>
        //     </Table>
        //   </TableContainer>
        // </Paper>
      )}
    </>
  );
};

export default Home;
