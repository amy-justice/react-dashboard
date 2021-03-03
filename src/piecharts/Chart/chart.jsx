import React, { Component } from "react";
import * as d3 from "d3";

import {
  animate,
  prepareData,
  calcStateOnProgress,
  unionProps
} from "./chart-helpers";

export class Chart extends Component {
  constructor(props) {
    super();

    this.state = {
      data: prepareData(props.data),
      arcGenerator: d3
        .arc()
        .innerRadius(props.radius * 0.84)
        .cornerRadius(props.radius * 0.25)
        .padAngle(0.03)
        .outerRadius(props.radius * 0.96),
      animating: false,
      time: 0
    };
  }

  async componentDidMount() {
    this.initializationChart(this.state.data, d3.select(`#CharT g`));

    animate({
      timing: function(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      },
      duration: 1500,
      draw: progress => this.drawChartOnProgress(this.state.data, 1 - progress)
    });
  }

  componentWillReceiveProps(nextProps) {
    const mergeData = unionProps(this.props.data, nextProps.data);
    const duration = 1300;
    this.setState({ animating: true });

    animate({
      timing: function(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      },
      duration,
      draw: progress => this.drawChartOnProgress(mergeData, progress),
      callback: () => this.setState({ animating: false })
    });
  }

  initializationChart(data, el) {
    const arcBg = d3
      .arc()
      .innerRadius(this.props.radius * 0.8)
      .cornerRadius(this.props.radius * 0.25)
      .outerRadius(this.props.radius)
      .startAngle(0)
      .endAngle(2 * Math.PI);

    el.append("path")
      .attr("d", arcBg())
      .attr("fill", "#f7f7f7");

    data.forEach(item => {
      el.append("path")
        .attr("id", item.id)
        .attr("fill", item.fill);
    });
  }

  drawChart(data) {
    data.forEach(item => {
      d3.select(`#${item.id}`).attr(
        "d",
        this.state.arcGenerator({
          startAngle: item.startAngle,
          endAngle: item.endAngle
        })
      );
    });
  }

  drawChartOnProgress(initialState, progress) {
    this.drawChart(calcStateOnProgress(initialState, progress));
  }

  render() {
    return (
      <svg id="CharT" width={this.props.width} height={this.props.height}>
        <g
          transform={`translate(${this.props.width / 2}, ${this.props.height /
            2})`}
        />
      </svg>
    );
  }
}
