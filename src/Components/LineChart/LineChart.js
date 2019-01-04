import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Plot from 'react-plotly.js';
import { render } from 'react-dom';

class LineChart extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://teller-api.herokuapp.com/api/v1/assets/bitcoin/history?interval=h2";
    const response = await fetch(url);
    // const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const json = await response.json();
    this.setState({ data: json });
  }
  render() {
    console.log(this.state.data)
    const allHistoryData = this.state.data
    let x_values = []
    let y_values = []
    allHistoryData.forEach(data => {
      x_values.push(data.date)
      y_values.push(data.price)
    });
    console.log(x_values)

    return ([
      <section>
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
      </section>
    ])
  }
}


export default LineChart
