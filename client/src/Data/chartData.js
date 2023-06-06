import { area, curveBasis, curveCardinal, line } from "d3";
import * as d3 from "d3"
export const minWidth = window.innerWidth /2
export const height = (window.innerHeight *40) / 100;
export const chartData = [
    {
      tide: 2,
      hour: "Mon 12:00 pm",
      x: 0,
    },
    {
      tide: 2,
      hour: "Mon 6:00 am",
      x: minWidth,
    },
    {
      tide: 0.7,
      hour: "Mon 12:00 am",
      x: minWidth * 2,
    },
    {
      tide: 1.9,
      hour: "Mon 6:00 pm",
      x: minWidth * 3,
    },
    {
      tide: 0.9,
      hour: "Tue 12:00 pm",
      x: minWidth * 4,
    },
    {
      tide: 0.5,
      hour: "Tue 6:00 am",
      x: minWidth * 5,
    },
    {
      tide: 0.6,
      hour: "Tue 12:00 am",
      x: minWidth * 6,
    },
    {
      tide: 1.1,
      hour: "Tue 6:00 pm",
      x: minWidth * 7,
    },
    {
      tide: 0.8,
      hour: "Wed 12:00 pm",
      x: minWidth * 8,
    },
    {
      tide: 1.3,
      hour: "Wed 6:00 am",
      x: minWidth * 9,
    },
    {
      tide: 0.8,
      hour: "Wed 12:00 am",
      x: minWidth * 10,
    },
    {
      tide: 1.2,
      hour: "Wed 6:00 pm",
      x: minWidth * 11,
    },
    {
      tide: 0.8,
      hour: "Thur 12:00 pm",
      x: minWidth * 12,
    },
  ];

export const ySunLevel = [0, 2, 0, -2, 0, 2, 0, -2, 0, 2, 0]
export const xSunLevel = [
    minWidth,
    minWidth * 2,
    minWidth * 3,
    minWidth * 4,
    minWidth * 5,
    minWidth * 6,
    minWidth * 7,
    minWidth * 8,
    minWidth * 9,
    minWidth * 10,
    minWidth * 11
]
export const xTideLevel = [
    0,
    minWidth,
    minWidth * 2,
    minWidth * 3,
    minWidth * 4,
    minWidth * 5,
    minWidth * 6,
    minWidth * 7,
    minWidth * 8,
    minWidth * 9,
    minWidth * 10,
    minWidth * 11,
    minWidth * 12
]
const sunLevelPoint = xSunLevel.map((x,i)=>{
    return {
        x: x,
        y: height - ySunLevel[i] * 100
    }
})
const sunGen = line()
.x((p)=>p.x)
.y((p)=>p.y)
.curve(curveCardinal)

const tideLevelPoint = xTideLevel.map((x,i)=>{
    return{
        x: x,
        y: height - chartData[i].tide * 80
    }
})
// const xScale = d3.scaleLinear.range([0, minWidth])
// export const xAxis = d3.axisBottom(xScale)

const tideGen = area()
.x((p)=>p.x)
.y1((p)=>p.y)
.y0(height)
.curve(curveBasis)

export const pathOfsunLine = sunGen(sunLevelPoint)
export const pathOftideLine = tideGen(tideLevelPoint)