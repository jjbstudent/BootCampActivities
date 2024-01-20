 // Function to update the time and date
 function updateTime() {
  const datetimeElement = document.getElementById('datetime');
  const currentTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  datetimeElement.textContent = `Current Time: ${currentTime}`;
}

// Update time initially
updateTime();

// Set up a setInterval to update time every second
setInterval(updateTime, 1000);

$(document).ready(function () {
  // Event listener for the button click
  $('#launchModalButton').on('click', function () {
    // Launch the modal when the button is pressed
    $('#openForm').modal('show');
  });

  // Initialize datepicker
  $('#dueDate').datepicker({
    minDate: 0, // Set minimum date to today
    dateFormat: 'yy-mm-dd' // Set date format
  });

  // Event listener for the project form submission
  $('#projectForm').on('submit', function (event) {
    event.preventDefault();

    // Get form values
    var projectName = $('#projectName').val();
    var projectType = $('#projectType').val();
    var hourlyWage = $('#hourlyWage').val();
    var dueDate = $('#dueDate').val();

    // Calculate days until due date using day.js
    var daysUntilDue = dayjs(dueDate).diff(dayjs(), 'day');

    // Calculate estimated total earned
    var estimatedTotalEarned = hourlyWage * 8 * daysUntilDue;

    // Create a new table row with project information
    var newRow = `<tr>
                    <td>${projectName}</td>
                    <td>${projectType}</td>
                    <td>${hourlyWage}</td>
                    <td>${dueDate}</td>
                    <td>${daysUntilDue}</td>
                    <td>${estimatedTotalEarned}</td>
                  </tr>`;

    // Append the new row to the table
    $('#projectTableBody').append(newRow);

    // Close the modal
    $('#openForm').modal('hide');
  });
});