// from data.js
const tableData = data;

// YOUR CODE HERE!
// Select the filter button button
const filter = d3.select("#filter-btn");

filter.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  const inputElement = d3.select("#datetime");

  // Get the value property of the input element
  const inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);
  // Create and log data needed for table based on filter date 
  let filteredData = tableData.filter(date_ => date_.datetime === inputValue);

  console.log(filteredData);
  // locate the tbody and loop to create table with filterd data
  let tbody = d3.select("tbody");

  filteredData.forEach((tableData) => {
    const row = tbody.append("tr");
    for (key in tableData){
        const cell = tbody.append("td");
        cell.text(tableData[key]);
    }
    });

});
