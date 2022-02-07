import React from "react";

import ChartBar from "./ChartBar/Chartbar";
import "./Chart.css";

const Chart = (props) => {

    const dataPointValues = props.chartDataPoints.map(dataPoints => dataPoints.value)

    const totalMax = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.chartDataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
