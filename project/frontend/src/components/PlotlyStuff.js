import React from 'react';
import Plot from 'react-plotly.js';

const titleFont = {
  family:'Roboto, sans-serif',
  size:14,
  // color:'red',
}

const tickFont = {
  family:'Roboto, sans-serif',
  size:14,
  // color:'green',

}

function formatData(data) {

  let x = 1
  var formatted = {
    'x' : [],
    'y': [],
    type: 'scatter',
    'x0' : 'date',
    mode: 'points',
    marker: {color: '#3f51b5'},
  }

  for (let date of data) {

    formatted.x.push(date.date)
    formatted.y.push(date.weight / 2.2046)
    x = x + 1
  }

  return formatted

}

class APlot extends React.Component {
  render() {

    const formattedData = formatData(this.props.data)

    return (
      <Plot
        data={[formattedData]}

        layout={{
          width: 640,
          height: 480,
          margin: {
            l: 100,
            r: 100,
            b: 100,
            t: 20,
            },
          xaxis:
            {
              title:'Date',
              titlefont: titleFont,
              tickfont: tickFont,
            },
          yaxis:
            {
              title:'Weight (kg)',
              titlefont: titleFont,
              tickfont: tickFont,
            }
        }}
      />
    );
  }
}

export default APlot
