// Function to update the display ensuring it doesn't go below 0
function updateDisplay(group, newValue) {
    let value = parseInt(newValue, 10);
    if (isNaN(value) || value < 0) {
        value = 0;
    }
    document.querySelector(`span.number[data-group=${group}]`).textContent = value;
}

// Add event listeners to the buttons
document.querySelectorAll('button.increment').forEach(button => {
    button.addEventListener('click', () => {
        const group = button.getAttribute('data-group');
        const span = document.querySelector(`span.number[data-group=${group}]`);
        let value = parseInt(span.textContent, 10);
        value++;
        updateDisplay(group, value);
    });
});

document.querySelectorAll('button.decrement').forEach(button => {
    button.addEventListener('click', () => {
        const group = button.getAttribute('data-group');
        const span = document.querySelector(`span.number[data-group=${group}]`);
        let value = parseInt(span.textContent, 10);
        if (value > 0) {
            value--;
        }
        updateDisplay(group, value);
    });
});


