// from data.js
var tableData = data;
console.log(tableData)
// YOUR CODE HERE!

// references
var tbody = d3.select("tbody");

var clickSearch = d3.select('#filter-btn');


// Step 1: Loop Through `tableData` and log each sighting report object
tableData.forEach(function(sighting) {
  console.log(sighting);

  // Step 2:  Use d3 to append one table row `tr` for each sighting report object
  var row = tbody.append("tr");

  // Step 3:  Use `Object.entries` to log each sighting report value
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);

    // Step 4: Use d3 to append 1 cell per sighting report value (date, city, state, country, shape, duration, comments)
    var cell = row.append("td");

    // Step 5: Use d3 to update each cell's text with
    // sighting report values (date, city, state, country, shape, duration, comments)
    cell.text(value);
  });
});

clickSearch.on('click', function() {
  // clear HTML section for new search
  tbody.html('');
  var dateSearch = d3.select('#datetime');
  var userInput = dateSearch.property('value');
  console.log(userInput);
  // prevents table from refreshing to its original state
  d3.event.preventDefault();

  // choosing the entries for which the user input date matches the sighting date
  var filteredData = tableData.filter(entries => entries.datetime === userInput);
  console.log(filteredData);

  //repeat function above to render table but with FILTERED ENTRIES and not entire list
  filteredData.forEach(function(filteredEntries){
    console.log(filteredEntries);

    // Step 2:  Use d3 to append one table row `tr` for each sighting report object
    var row = tbody.append("tr");

  // Step 3:  Use `Object.entries` to log each sighting report value
  Object.entries(filteredEntries).forEach(function([key, value]) {
    console.log(key, value);

    // Step 4: Use d3 to append 1 cell per sighting report value (date, city, state, country, shape, duration, comments)
    var cell = row.append("td");

    // Step 5: Use d3 to update each cell's text with
    // sighting report values (date, city, state, country, shape, duration, comments)
    cell.text(value);
  });
});
});