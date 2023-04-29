import React from "react";
import ReactECharts from "echarts-for-react";
import getdata from "../winedata.json";
import "../App.css";

let flavanoidsArr = [];
let ashArr = [];

function alldata() {
  for (let i = 0; i < getdata.length; i++) {
    flavanoidsArr.push(getdata[i].Flavanoids);
    ashArr.push(getdata[i].Ash);
  }
}

alldata();

const LineChart = () => {
  const options = {
    grid: { top: 10, right: 25, bottom: 50, left: 55 },
    xAxis: {
      type: "category",
      data: flavanoidsArr,
      axisLabel: {
        formatter: "{value}",
      },
      name: "Flavanoids",
      nameLocation: "middle",
      nameGap: 30,
      
    },

    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}",
      },
      name: "Ash",
      nameLocation: "middle",
      nameGap: 30,
    },
    series: [
      {
        data: ashArr,
        type: "line",
        name: "Ash",
        areaStyle: {
          color: "red",
          opacity: 0.2,
        },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return <ReactECharts option={options} className="Chartdiv" />;
};

export default LineChart;
