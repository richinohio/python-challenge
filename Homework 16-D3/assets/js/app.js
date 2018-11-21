// @TODO: YOUR CODE HERE!
//Using the D3 techniques we taught you in class, create a scatter plot that represents each state with circle elements. You'll code this graphic in the `app.js` file of your homework directory—make sure you pull in the data from `data.csv` by using the `d3.csv` function. Your scatter plot should ultimately appear like the image at the top of this section.

// Include state abbreviations in the circles.

// Create and situate your axes and labels to the left and bottom of the chart.

	//do stuff with data here 
//}):
// data is gone at this point

// same code as above except with the error param
//d3.csv("assets/data/data.csv").then(function(data, error) {
	//do stuff with data here 
//}):
// data is gone at this point

d3.csv("assets/data/data.csv").then(function(data) {
     
    console.log(data);
    
    var state = data.map(data => data.state);
  console.log("States", state);

  // Cast each hours value in tvData as a number using the unary + operator
  data.forEach(function(data) {
    data.poverty= +data.poverty;
    data.healthcare= +data.healthcare;
    
    console.log("Poverty:", data.poverty);
    console.log("No Health Insurance:", data.healthcare);
  });
    // Define SVG area dimensions
var svgWidth = 1000;
var svgHeight = 700;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  var xScale = d3.scaleLinear()
  .range([0, chartWidth])
  .domain(d3.extent(data, data => data.poverty));

// Configure a linear scale with a range between the chartHeight and 0
// Set the domain for the xLinearScale function
    var yScale = d3.scaleLinear()
  .range([chartHeight, 0])
  .domain([0, d3.max(data, data => data.healthcare)]);

  var bottomAxis = d3.axisBottom(xScale);
  var leftAxis = d3.axisLeft(yScale);

  chartGroup.append("g")
  .classed("axis", true)
  .call(leftAxis);

  chartGroup.append("g")
    .classed("axis", true)
    .attr("transform", "translate(0, " + chartHeight + ")")
    .call(bottomAxis);

// new part- draw circles
theCircles = svg.selectAll("g").data(data).enter();
    
theCircles.append("circle")
.attr("class", "dot")
.attr("r", 10)
.attr("cx", function(d)
    {return xScale(d.poverty);})
.attr("cy", function(d)
    {return yScale(d.healthcare);})
.style("fill", "blue")
.on("mouseover", function(d) {
  // Show the tooltip
  toolTip.show(d);
  // Highlight the state circle's border
  d3.select(this).style("stroke", "#323232");
})
.on("mouseout", function(d) {
  // Remove the tooltip
  toolTip.hide(d);
  // Remove highlight
  d3.select(this).style("stroke", "#e3e3e3");
});

  theCircles.append("text")
  .text( function(d) {
      return d.abbr
        })
        .attr("dx", function(d) {
      return xScale(d.poverty)
        })
        .attr("dy", function(d) {
      return yScale(d.healthcare)
        })
        .attr("font-size", 10)
        .attr("transform", "translate(-5, 0)")
        .attr("stroke", "white");

        var toolTip = d3.tip().attr("class", "d3-tip").offset([40, -40])
        .html(function(d) {
            var text_html = "<div>" + d.state + "</div>"
            var data_text = "<div>" + d.poverty + "</div>"
      
            return text_html + data_text
        });

        svg.call (toolTip);

        
    
    
    
    
  //});


});
