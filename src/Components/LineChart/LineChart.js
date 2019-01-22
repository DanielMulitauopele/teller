import React, { Component } from "react";
import Plot from "react-plotly.js";
import "./LineChart.css";

class LineChart extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://teller-api.herokuapp.com/api/v1/assets/bitcoin/history?interval=m30";
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ data: json });
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
                type: "linear",
                mode: "lines",
                marker: { color: "#794dff" }
              }
            ]}
            style={{ width: "26rem", height: "100%" }}
            layout={{
              height: 230,
              font: { color: "white" },
              visible: false,
              xaxis: { title: false, showgrid: false },
              yaxis: { title: false, showgrid: false },

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
