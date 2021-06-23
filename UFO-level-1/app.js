// Test that console log is working
//console.log("hi there")

// Get data from from data.js
var tableData = data;
console.log(tableData);

/////////////////////
// GOAL 1: Have data display on page

// Select table (to later append to)
var tbody = d3.select("tbody");
// Append a table to webpage using data.js

// Add new rows of data for each UFO sighting
tableData.forEach((witness) => {
    // Test if pulling each witness report individually from data array
    //console.log(witness);

    // Append a row with each witness report information
    var row = tbody.append("tr"); 
    // Checked html and rows were added to table body

    // Test if rows are added for each witness 
    //console.log(row);

    // Use object entries to console.log each UFO witness report 
    Object.entries(witness).forEach(function([key, value]) {
        console.log(key, value);

        // Add a cell for each value now that we have rows and values 
        var cell = row.append("td");
        // Checked html and cells were added to table body

        // Add content to cells
        cell.text(value); 
    });
});


/////////////////////
// GOAL 2: If someone clicks the button, then get value of what they entered and search it
////////////////////

// Identify the button 
var button = d3.select("#filter-btn"); 

// Create event listener and create a function to find value of what user entered 
button.on("click", function() {

    var input2 = d3.select("#datetime");
    var inputvalue = input2.property("value");
    console.log(inputvalue);
    
});




