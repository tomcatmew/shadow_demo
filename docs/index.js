var trace1 = {
  x: [0],
  y: [0],
  type: 'scatter'
};

const fileUrl = 'training_record/train_walk_256_1' // provide file location

fetch(fileUrl)
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	console.log(data);
  	console.log(typeof data);
  	var all_x = data.split('\n')[0];
  	var all_y = data.split('\n')[1];
  	var array_x = all_x.split(' ').match(/\d+(?:\.\d+)?/g).map(Number);
  	var array_y = all_y.split(' ').match(/\d+(?:\.\d+)?/g).map(Number);
  	console.log(typeof array_x);
  	console.log(array_x);
  	trace1.x = array_x;
  	trace1.y = array_y;
  });


var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  type: 'scatter'
};
console.log(trace2);
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
