import React, { Component } from "react";
import Plot from "react-plotly.js";
import { fetchGraphData } from "../../Utils/API/"

class LineChart extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const data = await fetchGraphData()
    this.setState({ data })
  }

  render() {
    const allHistoryData = this.state.data
    let x_values = []
    let y_values = []
    allHistoryData.forEach(data => {
      x_values.push(data.date)
      y_values.push(data.price)
    });

    return (
      <div>
        <Plot data={[
          {
            x: x_values,
            y: y_values,
            type: 'linear',
            mode: 'lines',
            marker: {color: 'green'},
            fill: 'tozeroy',
          }
        ]} layout={
          {
            width: 320,
            height: 240,
            title: 'Price History',
            font: {color: 'white'},
            visible: false,
            xaxis: {title: 'Time',
                    showgrid: false},
            yaxis: {title:'Price',
                    showgrid: false},
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)',
          }
        }
        />
      </div>
    )
  }
}


export default LineChart
