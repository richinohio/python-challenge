// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
// console.log(data);

// loop through the data 
data.forEach((entry) => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// filter the data by date-time
d3.selectAll(".filter").on("change", function (event){
    var changedElement = d3.event.target;
    var filterId = changedElement.id;
    var value = changedElement.value.trim();
    var tbody = d3.select("tbody").html("");

    
    data.filter(function (filteredElement){ 
        var matchesFilters = true;
        if (!fuzzyMatches(value, filteredElement[filterId])) {
                matchesFilters = false;
            }
        
        if (matchesFilters = true){ 
            var row = tbody.append("tr");
            Object.entries(filteredElement).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })      
        } 
    }
          )});
