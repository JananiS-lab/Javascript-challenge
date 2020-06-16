// from data.js
var tableData = data;

//Use D3 to select the table body
var tbody = d3.select("tbody");

//Append
data.forEach(function (AlienReport) {
  var row = tbody.append("tr");
  console.log(AlienReport);
  Object.entries(AlienReport).forEach(function ([key, value]){
    row.append("td").text(value);
    });
});

var button = d3.select("#filter-btn");

button.on('click', runEnter);

// Creating an event Handler function
function runEnter() {
  var inputField = d3.select('#datetime');
  var inputText = inputField.property('value');
  console.log(inputText);
  var filteredData = tableData.filter(tableData => tableData.datetime === inputText);
  console.log(filteredData);
  var finalData = d3.select('tbody');

  //Clearing the table contents before displaying the next selection.
  finalData.html("");

  //Appending the filtered data into the UFO-Table
  filteredData.forEach(function (report) {
    var row = tbody.append("tr");
    console.log(report);
    Object.entries(report).forEach(function ([key, value]) {
      row.append("td").text(value);
    });
  
  });

};
 