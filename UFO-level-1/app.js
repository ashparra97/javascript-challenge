// Study partner: Jason Wang

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

    // Empty out previous table 
    tbody.html("");

    // Select HTML properties 
    var input1 = d3.select("#datetime").property("value");
    console.log(input1);

    // Filter the values based on what the user enters 
    var filteredValues = tableData.filter(witness => witness.datetime === input1);
    console.log(filteredValues);
    

    // Show only the filtered values when button is clicked
    filteredValues.forEach((witness) => {

        // Append a row with each witness report information
        var row = tbody.append("tr"); 
        
        // Use object entries to console.log each UFO witness report but only for the filtered values 
        Object.entries(witness).forEach(function([key, value]) {
            console.log(key, value);

            // Add a cell for each value now that we have rows and values 
            var cell = row.append("td");
            // Checked html and cells were added to table body

            // Add content to cells
            cell.text(value); 
        });
    }); 
}); 




