//Project requirements: 
//When the user clicks the "Add Number" button, the number they entered into the input field should be added to the number bank.
//The number bank is not changed if the user enters a non-numeric value.
//The number bank should display all the numbers the user has entered.
//When the "Sort 1" button is clicked, the first number in the number bank should be removed and placed into either the odd or even category.
//When the "Sort All" button is clicked, all the numbers in the number bank should be moved into either the odd or even category.
//The numbers are placed into the correct bucket based on whether they are odd or even.


// DOM Elements
const form = document.querySelector("form");
const input = document.getElementById("number");
const numberBankOutput = document.querySelector("#numberBank output");
const sortOneBtn = document.getElementById("sortOne");
const sortAllBtn = document.getElementById("sortAll");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");

// App State
const state = {
  numberBank: [],
  odds: [],
  evens: [],
};

// Helpers
const render = () => {
  numberBankOutput.textContent = state.numberBank.join(", ");
  oddsOutput.textContent = state.odds.join(", ");
  evensOutput.textContent = state.evens.join(", ");
};

const sortNumber = (num) => {
  if (num % 2 === 0) {
    state.evens.push(num);
  } else {
    state.odds.push(num);
  }
};

// Event Listeners

// Add Number
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = parseInt(input.value);
  if (!isNaN(value)) {
    state.numberBank.push(value);
    render();
  }

  input.value = "";
});

// Sort 1 Number
sortOneBtn.addEventListener("click", () => {
  if (state.numberBank.length === 0) return;
  const number = state.numberBank.shift(); // Remove first number
  sortNumber(number);
  render();
});

// Sort All Numbers
sortAllBtn.addEventListener("click", () => {
  while (state.numberBank.length > 0) {
    const number = state.numberBank.shift();
    sortNumber(number);
  }
  render();
});
