let string = "";
let memory = 0; // Variable to store memory value
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('input');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                inputField.value = string;
            } catch (error) {
                inputField.value = 'Error';
            }
        } else if (e.target.innerHTML == 'C') {
            string = "";
            inputField.value = string;
        } else if (e.target.innerHTML == '.') {
            // Check if the last character is already a decimal point
            if (!string.endsWith('.')) {
                string = string + e.target.innerHTML;
                inputField.value = string;
            }
        } else if (e.target.innerHTML == 'M+') {
            // Add the current value to memory
            memory += parseFloat(string) || 0;
            string = "";
        } else if (e.target.innerHTML == 'M-') {
            // Subtract the current value from memory
            memory -= parseFloat(string) || 0;
            string = "";
        } else {
            string = string + e.target.innerHTML;
            inputField.value = string;
        }
    });
});
