import React, { Component } from "react";
import Plot from "react-plotly.js";
import "./LineChart.css";

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const currency = this.props.currency
    const url =
      `https://cors-anywhere.herokuapp.com/https://teller-api.herokuapp.com/api/v1/assets/bitcoin/history?interval=d1`;
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ data: json });
  }

  rNG() {
    return Math.floor(Math.random() * 5);
  }

  render() {
    const allHistoryData = this.state.data;
    let x_values = [];
    let y_values = [];
    allHistoryData.forEach(data => {
      x_values.push(data.date);
      y_values.push(data.price);
    });
    const modeBarConfig = { displayModeBar: false };
    return [
      <div>
        <section>
          <Plot
            className="plot-box"
            config={modeBarConfig}
            data={[
              {
                x: x_values,
                y: y_values,
                type: "scatter",
                mode: "lines",
                marker: { color: "#9862da" },
                width: 1,
                line: { shape: "spline", smoothing: 5 }
              }
            ]}
            style={{ width: "32rem", height: "100%" }}
            layout={{
              height: 330,
              font: { color: "white" },
              visible: false,
              xaxis: { title: false, showgrid: false },
              smoothing: 1.3,
              yaxis: {
                title: false,
                showgrid: false
              },

              paper_bgcolor: "rgba(0,0,0,0)",
              plot_bgcolor: "rgba(0,0,0,0)"
            }}
          />
        </section>
      </div>
    ];
  }
}

export default LineChart;
