var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [8, 7, 6, 5, 4, 3, 2, 1, 0],
  type: 'scatter'
};

var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  type: 'scatter'
};

var data = [trace1, trace2];

var layout = {
  xaxis: {
    type: 'log',
    autorange: true
  },
  yaxis: {
    type: 'log',
    autorange: true
  }
};

const fileUrl = 'training_record/train_walk_256_1' // provide file location

fetch(fileUrl)
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	console.log(data);
  });

Plotly.newPlot('myDiv', data, layout);
