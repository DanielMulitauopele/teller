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
    const modeBarConfig = {displayModeBar: false}
    return ([
      <div
        style={{
          width: this.state.fullWidth ? '100%' : '100%',
        }}>
      <section>
        <Plot config={modeBarConfig} data={[
          {
            x: x_values,
            y: y_values,
            type: 'linear',
            mode: 'lines',
            marker: {color: '#794dff'},
            fill: 'tozeroy',
          }
        ]} style={{width: '100%', height: '100%'}}
          layout={
          {
            margin: {
              l: 60,
              r: 40,
              b: 20,
              t: 25,
              pad: 5
            },
            height: 330,
            title: 'Price History',
            font: {color: 'white'},
            visible: false,
            xaxis: {title: false,
                    showgrid: false},
            yaxis: {title:'Price $',
                    titlefont: {
                    size: 16,
                    },
                    showgrid: false},

                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)',
          }
        }
        />
      </section>
      </div>
    ])
  }
}


export default LineChart
