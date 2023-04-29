import React from "react";
import ReactECharts from "echarts-for-react";
import getdata from "../winedata.json";
import "../App.css";

let alcoholArr = [];
let magnesiumArr = [];
let alc1=[]
let alc2=[]
let alc3=[]


function alldata() {
  for (let i = 0; i < getdata.length; i++) 
  {
    alcoholArr.push(getdata[i].Alcohol);
    magnesiumArr.push(getdata[i].Magnesium);
  }
}


for(let i=0;i<alcoholArr.length;i++)
{

console.log(alcoholArr[i])
}
console.log(alcoholArr)
// console.log(count,count2,count3)

alldata();

const BarChart = () => {
  const options = {
    grid: { top: 10, right: 25, bottom: 50, left: 55 },
    xAxis: {
      type: "category",
      data: alcoholArr,
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

export default BarChart
