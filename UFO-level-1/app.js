// Get data from from data.js
var tableData = data;

/////////////////////
// GOAL 1: Have data display on page
// Create variable that will hold column names 
var columns = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"];


// Reference to HTML (d3.select)
// Select table (to later append to)
var tbody = d3.select("tbody");
// Append a table to webpage using data.js

// Add new rows of data for each UFO sighting



/////////////////////
// GOAL 2: If someone clicks the button, then get value of what they entered and search it
////////////////////

// Identify the button 
var button = d3.select("#filter-btn"); 

// Create event listener 
button.on









// Listen for events and serach through data/time column to find rows that match user input 
