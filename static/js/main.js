

// Funkcija za postavljanje teme ////////////////////////////////////
function setTheme(theme) {
document.documentElement.setAttribute('data-theme', theme);
document.querySelector('.theme-controller').checked = theme === 'retro';
}

// Provjerite postoji li već spremljena tema u localStorage
const savedTheme = localStorage.getItem('theme') || 'retro'; // Default tema
setTheme(savedTheme);

// Dodajte event listener za promjenu teme
document.querySelector('.theme-controller').addEventListener('change', (event) => {
const newTheme = event.target.checked ? event.target.value : 'business';
// Promijenite temu na stranici
setTheme(newTheme);
// Spremite novu temu u localStorage
localStorage.setItem('theme', newTheme);
});
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////





// Vodenicarski kalkulator /////////////////////////////////////////
const c1 = document.getElementById("currency-one");
const c2 = document.getElementById("currency-two");
const amount1 = document.getElementById("amount-one");
const amount2 = document.getElementById("amount-two");

function calculate() {
    const curr1 = c1.value;
    const curr2 = c2.value;
    const inputValue = parseFloat(amount1.value);
    // let inputValue; //dodano
    let result;

    if (curr1 === 'vodenica') {
        if (curr2 === 'kamen') {
            result = inputValue * 7;
        } else if (curr2 === 'litra') {
            result = inputValue * 28;
        } else if (curr2 === 'drami') {
            result = inputValue * 2800;
        } else if (curr2 === 'vlasnik') {
            result = inputValue * 1;
        } else if (curr2 === 'dani') {
            result = inputValue / 196;
        } else {
            result = inputValue;
        }

    } else if (curr1 === 'kamen') {
        if (curr2 === 'vodenica') {
          result = inputValue / 7;
        } else if (curr2 === 'litra') {
          result = inputValue * 4;
        } else if (curr2 === 'drami') {
          result = inputValue * 400;
        } else if (curr2 === 'vlasnik') {
          result = inputValue / 7;
        } else if (curr2 === 'dani') {
          result = inputValue / 28;
        } else {
          result = inputValue;
        }
      } else if (curr1 === 'litra') {
        if (curr2 === 'vodenica') {
          result = inputValue / 28;
        } else if (curr2 === 'kamen') {
          result = inputValue / 4;
        } else if (curr2 === 'drami') {
          result = inputValue * 100;
        } else if (curr2 === 'vlasnik') {
          result = inputValue / 28;
        } else if (curr2 === 'dani') {
          result = inputValue / 7;
        } else {
          result = inputValue;
        }
      } else if (curr1 === 'drami') {
        if (curr2 === 'vodenica') {
          result = inputValue / 2800;
        } else if (curr2 === 'kamen') {
          result = inputValue / 400;
        } else if (curr2 === 'litra') {
          result = inputValue / 100;
        } else if (curr2 === 'vlasnik') {
          result = inputValue / 2800;
        } else if (curr2 === 'dani') {
          result = inputValue / (7 * 100);
        } else {
          result = inputValue;
        }
      } else if (curr1 === 'vlasnik') {
        if (curr2 === 'vodenica') {
          result = inputValue * 1;
        } else if (curr2 === 'kamen') {
          result = inputValue * 7;
        } else if (curr2 === 'litra') {
          result = inputValue * 28;
        } else if (curr2 === 'drami') {
          result = inputValue * 2800;
        } else if (curr2 === 'dani') {
          result = inputValue * 196;
        } else {
          result = inputValue;
        }
      } else if (curr1 === 'dani') {
        if (curr2 === 'vodenica') {
          result = inputValue * 196;
        } else if (curr2 === 'kamen') {
          result = inputValue * 28;
        } else if (curr2 === 'litra') {
          result = inputValue * 7;
        } else if (curr2 === 'drami') {
          result = inputValue * (7 * 100);
        } else if (curr2 === 'vlasnik') {
          result = inputValue / 196;
        } else {
          result = inputValue;
        }
      }

    amount2.value = result;
}

// Event Listeners
c1.addEventListener("change", calculate);
amount1.addEventListener("input", calculate);
c2.addEventListener("change", calculate);


//
// // dodano
// // Determine which input field was changed
//   const changedInput = event.target.id;
//
//   // Get the value from the changed input field
//   if (changedInput === 'amount-one') {
//     inputValue = parseFloat(amount1.value);
//   } else {
//     inputValue = parseFloat(amount2.value);
//   }
//
//   // Calculate the result based on the selected units
//   // ... (same conversion logic as before)
//
//   // Update the other input field
//   if (changedInput === 'amount-one') {
//     amount2.value = result;
//   } else {
//     amount1.value = result;
//   }
//
//
// // Event Listeners
// c1.addEventListener("change", calculate);
// amount1.addEventListener("input", calculate);
// c2.addEventListener("change", calculate);
// amount2.addEventListener("input", calculate); // Add event listener for amount-two








