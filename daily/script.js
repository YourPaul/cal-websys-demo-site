// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to perform calculation
function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression); // Using eval for simplicity, not recommended for production
    document.getElementById('display').value = result;
}
