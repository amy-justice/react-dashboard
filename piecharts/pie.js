import React, { Component } from "react";

import { Chart } from "./Chart/chart.jsx";


const data = [
  { label: "A", startAngle: 0, endAngle: 0.2, fill: "#2DC1D4", id: "aa" },
  { label: "B", startAngle: 0.2, endAngle: 0.6, fill: "#E5DB0C", id: "bb" },
  { label: "C", startAngle: 0.6, endAngle: 1.4, fill: "#C135CC", id: "cc" },
  { label: "D", startAngle: 1.4, endAngle: 3, fill: "#5200FF", id: "dd" },
  {
    label: "E",
    startAngle: 3,
    endAngle: 2 * Math.PI,
    fill: "#87f7ff",
    id: "ee"
  }
];

const data1 = [
  { label: "A", startAngle: 0, endAngle: 0.4, fill: "#2DC1D4", id: "aa" },
  { label: "C", startAngle: 0.4, endAngle: 4, fill: "#C135CC", id: "cc" },
  {
    label: "E",
    startAngle: 4,
    endAngle: 2 * Math.PI,
    fill: "#87f7ff",
    id: "ee"
  }
];

const radius = 90;
const width = 300;
const height = 300;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      flag: false
    };
  }

  render() {
    return (
      <div className="App">
       
        <Chart
          width={width}
          height={height}
          radius={radius}
          data={this.state.flag ? data1 : data}
        />
       
      </div>
     
    );
  }
}


