function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}


window.onload = function exampleFunction() {
    const fileUrl = 'training_record/train_walk_256_1';
    var data = loadFile(fileUrl);
    console.log(date)
};

var trace1 = {
  x: [0],
  y: [0],
  type: 'scatter'
};


//fetch(fileUrl)
//  .then(response => response.text())
//  .then(data => {
//  	// Do something with your data
//  	console.log(data);
//  	console.log(typeof data);
//  	var all_x = data.split('\n')[0];
//  	var all_y = data.split('\n')[1];
//  	console.log(all_x);
//  	var array_x = all_x.split(' ').map(function(item) {
//    return parseFloat(item, 10);});
//  	var array_y = all_y.split(' ').map(function(item) {
//    return parseFloat(item, 10);});
//  	console.log(typeof array_x);
//  	console.log(array_x);
//  	trace1.x = array_x;
//  	trace1.y = array_y;
//  });

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
