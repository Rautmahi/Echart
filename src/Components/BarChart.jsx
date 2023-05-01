import React from "react";
import ReactECharts from "echarts-for-react";
import getdata from "../winedata.json";
import "../App.css";

const categories = [...new Set(getdata.map((item) => item["Alcohol"]))];
// console.log(categories)
const magnesiumarr = categories.map((ele) => {
  const filteredData = getdata.filter((item) => item["Alcohol"] === ele);
  const minmagnesium = Math.min(
    ...filteredData.map((item) => item["Magnesium"])
  );
  // console.log(minmagnesium)

  return minmagnesium;
});

const BarChart = () => {
  const options = {
    grid: { top: 10, right: 25, bottom: 50, left: 55 },
    xAxis: {
      type: "category",
      data: categories,
      axisLabel: {
        formatter: "{value}",
      },
      name: "Alcohol",
      nameLocation: "middle",
      nameGap: 30,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}",
      },
      name: "Magnesium",
      nameLocation: "middle",
      nameGap: 30,
    },
    series: [
      {
        name: "Magnesium",
        type: "bar",
        data: magnesiumarr,
        itemStyle: {
          color: "#91cc65",
          shadowColor: "#91cc75",
          borderType: "dashed",
          opacity: 3.5,
        },
        backgroundStyle: {
          color: "rgba(220, 220, 220, 0.8)",
        },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return <ReactECharts option={options} className="Chartdiv" />;
};

export default BarChart;
