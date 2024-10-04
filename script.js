// Toggle the navbar menu on mobile
document
  .getElementById("navbar-toggle")
  .addEventListener("click", function () {
    var menu = document.getElementById("navbar-menu");
    menu.classList.toggle("show");
  });

// Toggle dropdown menu on mobile
var dropdowns = document.querySelectorAll(".dropdown > a");
dropdowns.forEach(function (dropdown) {
  dropdown.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    var dropdownMenu = this.nextElementSibling; // Get the corresponding dropdown menu
    dropdownMenu.classList.toggle("show"); // Toggle the dropdown menu
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".dropdown") &&
    !event.target.closest(".navbar-toggle")
  ) {
    dropdowns.forEach(function (dropdown) {
      var dropdownMenu = dropdown.nextElementSibling;
      dropdownMenu.classList.remove("show"); // Hide all dropdown menus
    });
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('redirect-checkbox');

  // Check the saved state from localStorage
  if (localStorage.getItem('checkboxState') === 'checked') {
      checkbox.checked = true;
  } else {
      checkbox.checked = false;
  }

  // Add event listener for the checkbox
  checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
          // Save the state and redirect to index1.html
          localStorage.setItem('checkboxState', 'checked');
          window.location.href = 'index1.html';
      } else {
          // Save the state and redirect to index.html
          localStorage.setItem('checkboxState', 'unchecked');
          window.location.href = 'index.html';
      }
  });
});




document.addEventListener("DOMContentLoaded", function() {
  const lines = [
    document.getElementById("animatedTextLine1"),
    document.getElementById("animatedTextLine2")
  ];

  let totalDuration = 0;

  lines.forEach((line, lineIndex) => {
    const textContent = line.textContent;
    
    // Clear existing text
    line.textContent = "";
    
    // Calculate the delay for the second line to start after the first line ends
    const lineDelay = lineIndex === 1 ? totalDuration : 0;

    // Split text into individual characters, preserving spaces
    textContent.split('').forEach((char, index) => {
      // Create a span for each character, including spaces
      const span = document.createElement("span");
      span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spacing
      span.style.animationDelay = `${lineDelay + index * 0.1}s`;
      
      // Append span to the line
      line.appendChild(span);
    });

    // Update total duration after the first line has been processed
    totalDuration += textContent.length * 0.1; // Adjust this multiplier if needed
  });
});





