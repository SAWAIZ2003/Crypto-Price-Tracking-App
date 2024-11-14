import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData?.prices) {
      historicalData.prices.forEach((item) => {
        const date = new Date(item[0]); // Convert timestamp to Date object
        dataCopy.push([date.toLocaleDateString(), item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      legendToggle
    />
  );
};

export default LineChart;

