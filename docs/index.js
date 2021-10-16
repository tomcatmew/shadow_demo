var trace1 = {
  x: [],
  y: [],
  type: 'scatter'
};

const fileUrl = 'training_record/train_walk_256_1' // provide file location

fetch(fileUrl)
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	console.log(data);
  	trace1.x = data.split('\n')[0];
  	trace1.y = data.split('\n')[1];
  });


var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  type: 'scatter'
};
console.log(trace2.x);
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

Plotly.newPlot('myDiv', data, layout);
