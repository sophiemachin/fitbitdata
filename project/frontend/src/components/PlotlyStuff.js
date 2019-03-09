import React from 'react';
import Plot from 'react-plotly.js';

class APlot extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 640, height: 480, title: 'This is my sample plot'} }
      />
    );
  }
}

export default APlot
