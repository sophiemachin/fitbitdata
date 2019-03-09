import React from 'react';
import Plot from 'react-plotly.js';

function sortByDate(a, b) {
  return a.date - b.date;
}



function formatData(data) {

  let x = 1

const sorted = data.sort(sortByDate)

  var formatted = {
    'x' : [],
    'y': [],
    type: 'scatter',
    'x0' : 'date',
    mode: 'lines+points',
    marker: {color: 'red'},
  }

  for (let date of sorted) {
    console.log(date)

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
          title: 'Weight data - Feb',
          xaxis:
            {
              title:'Day',
            },
          yaxis:
            {
              title:'Weight (lbs)',
            }
        }}
      />
    );
  }
}

export default APlot
