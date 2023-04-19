
var tableContainer = document.querySelector('.table-container');

// add an event listener to detect when the table is scrolled horizontally
tableContainer.addEventListener('scroll', function() {
  // get the table header
  var tableHeader = tableContainer.querySelector('thead');
  // set the table header's left margin to the negative value of the table container's scrollLeft property
  tableHeader.style.marginLeft = -tableContainer.scrollLeft + 'px';
});











//filter functinality

function filter() {
  // Get input values
  const dateValue = document.getElementById("date-filter").value;
  //const yearValue = document.getElementById("year-filter").value;
  const locationValue = document.getElementById("location-filter").value.toLowerCase();
  
  

  // Get table rows
  const tableRows = document.getElementsByTagName("tr");
  for (let i = 0; i < tableRows.length; i++) {
    const row = tableRows[i];
   

    // Skip header row
    if (row.getElementsByTagName("th").length > 0) {
      continue;
    }

    // Get cell values
    const dateCell = row.getElementsByTagName("td")[5];
    ///const yearCell = dateCell.spli;
    const locationCell = row.getElementsByTagName("td")[4];

    const flagCell = row.getElementsByTagName("td")[6];

    // Filter by date
    if (dateValue !== "") {
      const rowDate = new Date(dateCell.textContent);
      const filterDate = new Date(dateValue);
      if (rowDate.getTime() !== filterDate.getTime()) {
        row.style.display = "none";
        continue;
      }
    }

    // Filter by location
    if (locationValue !== "") {
      if (locationCell.textContent.toLowerCase().indexOf(locationValue) === -1) {
        row.style.display = "none";
        continue;
      }
    }


        // check if the flag is 1
      if (flagCell.innerText === "yes") {
        // set the row background color to red
        row.style.backgroundColor = 'red';
        continue;
      }

    // Show row if it passes all filters
    row.style.display = "";
  }
}






//the is code is for toggle


function toggleTableRows(checkbox) {
  const rows = document.querySelectorAll('table tbody tr');
  for (let i = 0; i < rows.length; i++) {
    const flagCell = rows[i].querySelector('td:nth-child(7)');
    if (checkbox.checked && flagCell && flagCell.textContent.trim() !== 'yes') {
      rows[i].style.display = 'none';
    } else {
      rows[i].style.display = '';
    }
  }
}




// function to show the pop-up window with the images
function showPopup() {
	// show the background blur
	document.getElementById("background").style.display = "block";

	// show the pop-up container
	document.getElementById("popup-container").style.display = "block";
}

// function to close the pop-up window
function closePopup() {
	// hide the background blur and the pop-up container
	document.getElementById("background").style.display = "none";
	document.getElementById("popup-container").style.display = "none";
}
