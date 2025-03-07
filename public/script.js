// Sample data to be rendered into the table
const data = [
    { id: 1, name: "Google", type: "Search Engine", website: "https://google.com" },
    { id: 2, name: "Facebook", type: "Social Media", website: "https://facebook.com" },
    { id: 3, name: "YouTube", type: "Video Platform", website: "https://youtube.com" },
    { id: 4, name: "Twitter", type: "Social Media", website: "https://twitter.com" },
    { id: 5, name: "GitHub", type: "Code Hosting", website: "https://github.com" },
  ];
  
  // Function to render data into the table
  function renderTable(data) {
    const tbody = document.getElementById("result");
  
    // Clear any existing content in the table body
    tbody.innerHTML = "";
  
    // Loop through the data and create table rows
    data.forEach((item) => {
      const row = document.createElement("tr");
  
      // Add ID column
      const idCell = document.createElement("td");
      idCell.textContent = item.id;
      row.appendChild(idCell);
  
      // Add Name column
      const nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);
  
      // Add Type column
      const typeCell = document.createElement("td");
      typeCell.textContent = item.type;
      row.appendChild(typeCell);
  
      // Add Website column
      const websiteCell = document.createElement("td");
      const websiteLink = document.createElement("a");
      websiteLink.href = item.website;
      websiteLink.textContent = item.website;
      websiteLink.target = "_blank"; // Open link in a new tab
      websiteCell.appendChild(websiteLink);
      row.appendChild(websiteCell);
  
      // Append the row to the table body
      tbody.appendChild(row);
    });
  }
  
  // Call the renderTable function with the sample data
  renderTable(data);