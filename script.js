// Get the button and color picker elements
const changeColorBtn = document.getElementById('changeColorBtn');
const colorPicker = document.getElementById('colorPicker');

// Array of predefined colors
const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccff', '#ccffff'];

// Function to change the background color
function changeBackgroundColor() {
  // Get a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function to change the background color to the user's choice
function changeColorToUserChoice() {
  const userColor = colorPicker.value;
  document.body.style.backgroundColor = userColor;
}

// Add event listeners
changeColorBtn.addEventListener('click', changeBackgroundColor);
colorPicker.addEventListener('input', changeColorToUserChoice);