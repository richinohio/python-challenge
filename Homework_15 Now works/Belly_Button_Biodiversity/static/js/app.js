function buildMetadata(sample) {
  d3.json(`/metadata/${sample}`).then((sampleData) =>{
        console.log(sampleData);
    var selector =  d3.select("#sample-metadata");
    selector.html("") 
    Object.entries(sampleData).forEach(([key,value])=> {
      selector.append('div').text(key+":"+value);
    });
  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
 


  });
}
  

	// double check sampleData layout


 
  
    // Use d3 to select the panel with id of `#sample-metadata`

 

  
    
    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);


function buildCharts(sample) {
  console.log(sample);
  d3.json(`/samples/${sample}`).then((sampleData) => {
	


    
    var sampleValue = sampleData.sample_values;
    console.log(sampleValue);
    var labelData = sampleData.otu_labels;
    var otu_id = sampleData.otu_ids;
    var PIE = document.getElementById('pie');
    var pieData = {
        values: sampleValue.slice(0,10),
        labels: otu_id.slice(0,10),
        hovertext: labelData.slice(0,10),
        hoverinfo: 'hovertext',
        type: 'pie'
    };
    var pieLayout = {
     margin: {t: 0, l: 0}
    };
    Plotly.plot(PIE, pieData, pieLayout);

    // @TODO: Build a Bubble Chart using the sample data

    var BUBBLE = [{
      x: sampleValue,
      y: labelData,
     
      mode: 'markers',
      marker: {
        size : sampleValue,
           color: otu_id
      }
    }];
        
      
    
  
    
    
    var layout = {
    title: 'Bubble Chart Hover Text',
    showlegend: false,
    
  }

  Plotly.plot('bubble',BUBBLE , layout);

  

  // @TODO: Use `d3.json` to fetch the sample data for the plots
 


    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
});
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
    selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    //Use the first sample from the list to build the initial plots
     const firstSample = sampleNames[0];
    console.log(firstSample)
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
 buildCharts(newSample);
 buildMetadata(newSample);
}

// Initialize the dashboard
init();
