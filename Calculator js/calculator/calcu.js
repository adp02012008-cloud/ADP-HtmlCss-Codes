let display = document.getElementById("display");


document.addEventListener("keydown", function(event) {
    const key = event.key;

    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '%', '.', '(', ')'].includes(key)) {
        display.value += key;
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});


function appendValue(value) {
    display.value += value;
}

function clearDisplay(value) {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value ="Error";
    }
}