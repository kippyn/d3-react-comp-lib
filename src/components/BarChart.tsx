import React from 'react'
import * as d3 from 'd3'
import "d3-selection-multi";

type BarChartProps = {
  chartHeight: number
  chartWidth: number
  data: Array<any>
};

export class BarChart extends React.Component<BarChartProps, {}> {
  height = this.props.chartHeight
  width = this.props.chartWidth
  data = this.props.data

  appenChart() {
    const svg = d3
      .select('.barChart')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)

    svg
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attrs({
        x: (d, i) => i * (this.width / this.data.length) + 5,
        y: d => this.height - d.total * 10,
        height: d => d.total * 10,
        width: this.width / this.data.length - 10,
        class: 'bar',
      })

    svg
      .selectAll('text')
      .data(this.data)
      .enter()
      .append('text')
      .text(d => d.category)
      .attrs({
        x: (d, i) => i * (this.width / this.data.length) + 5,
        y: d => this.height - d.total * 10,
      })
  }
  componentDidMount() {
    this.appenChart()
  }

  render() {
    return <div className="barChart" />
  }
}
