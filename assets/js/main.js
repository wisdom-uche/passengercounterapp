// This is a Javascript code that count passengers on the subway.
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let totalEl = document.getElementById('total-el');
let count = 0;


// increment function linked to the increment button in HTML to count passengers.
function increment() {
    count += 1;
    countEl.textContent = count;
}

// save function linked to the save button in HTML to store counted passengers.
function save() {
    let countStr = count + ' - ';
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}