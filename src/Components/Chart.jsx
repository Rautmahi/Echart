import React from "react";
import ReactECharts from "echarts-for-react";
import getdata from "../winedata.json";
import "../App.css";

let alcoholArr = [];
let magnesiumArr = [];
let flavanoidsArr = [];
let ashArr = [];

function alldata() {
  for (let i = 0; i < getdata.length; i++) {
    alcoholArr.push(getdata[i].Alcohol);
    magnesiumArr.push(getdata[i].Magnesium);
    flavanoidsArr.push(getdata[i].Flavanoids);
    ashArr.push(getdata[i].Ash);
  }
}
// console.log(Alc)
alldata();

const Page = () => {
  const options = {
    grid: { top: 10, right: 15, bottom: 30, left: 25 },
    xAxis: {
      type: "category",
      // data: alcoholArr,
      data: flavanoidsArr,
    },

    yAxis: {},

    series: [
      {
        type: "line",
        data: ashArr,
        smooth: true,
        name: "Ash",
        areaStyle: {
          color: "red",
          opacity: 0,
        },
      },
      {
        name: "Magnesium",
        type: "bar",
        data: magnesiumArr,
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

export default Page;
