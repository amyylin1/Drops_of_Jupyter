// import the data from samples.json

data = d3.json('samples.json')

const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// function to fill table with data

function buildTable(data) {

    // First, clear out any existing data:
    tbody.html("");
    
    // Next, loop through object in data and append a row and cells for each value in the row
    data.forEach((dataRow) => {

        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

// function that filters the table built from function above
function handleClick() {

    // Grab the datetime value from the filter:
    let region = d3.select("#region").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and fliter data using that date
    if (region) {

        // Apply filter to table data to only keep the rows where datetime value === filter value
        filteredData = filteredData.filter(row => row.region === region);
    };

    // Rebuild table w/ filtered data
    // NOTE: If no date entered, then filteredData = original tableData
    buildTable(filteredData);
};

// Attach an event to listen for the form button 
d3.selectAll("#filter-btn").on("click", handleClick);

// Build unfiltered table when the page loads
buildTable(tableData);