const numbers = [];
for (let i = 65; i < 91; i++) {
  numbers.push(String.fromCharCode(i));
}
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   const button = document.getElementById("kb" + num);
//   button.addEventListener("click", () => inputNumberDisplay(7));
// }

// display number 0
const displayNumber0 = document.getElementById("kb0");
displayNumber0.addEventListener("click", () => inputDisplayNumber(0));

// display number 1
const displayNumber1 = document.getElementById("kb1");
displayNumber1.addEventListener("click", () => inputDisplayNumber(1));

// display number 2
const displayNumber2 = document.getElementById("kb2");
displayNumber2.addEventListener("click", () => inputDisplayNumber(2));

// display number 3
const displayNumber3 = document.getElementById("kb3");
displayNumber3.addEventListener("click", () => inputDisplayNumber(3));

// display number 4
const displayNumber4 = document.getElementById("kb4");
displayNumber4.addEventListener("click", () => inputDisplayNumber(4));

// display number 5
const displayNumber5 = document.getElementById("kb5");
displayNumber5.addEventListener("click", () => inputDisplayNumber(5));

// display number 6
const displayNumber6 = document.getElementById("kb6");
displayNumber6.addEventListener("click", () => inputDisplayNumber(6));

// display number 7
const displayNumber7 = document.getElementById("kb7");
displayNumber7.addEventListener("click", () => inputDisplayNumber(7));

// display number 8
const displayNumber8 = document.getElementById("kb8");
displayNumber8.addEventListener("click", () => inputDisplayNumber(8));

// display number 9
const displayNumber9 = document.getElementById("kb9");
displayNumber9.addEventListener("click", () => inputDisplayNumber(9));

// display plusminus button
// const displayPlusminus = document.getElementById("kbplusminus");
// displayPlusminus.addEventListener("click", () => inputDisplayNumber("±"));

const displayNumberClear = document.getElementById("clear");
displayNumberClear.addEventListener("click", () => {
  inputdisplayNumberClear(" ");
});

let number = "";
const inputDisplayNumber = (n) => {
  number += n;
  if (number.length > 10) return;
  return (document.getElementById("displays").innerText = number);
};

// backspace button function -NOT WORKING

// const displayDelete = document.getElementById("del");
// displayDelete.addEventListener("click", () =>
//   inputDisplayNumber(slice(0, displayNon.length - 1))
// );

// const displayNon = document.getElementById("del");
// displayNon.addEventListener("click", () => slice(0, displayNon.length - 1));
// console.log(displayNumber);
// };

// clear button function - NOT WORKING
// const displayNone = document.getElementById("clear");
// clear = () => {
//   displayNone = "";
// console.log(displayNumber);
// };

// result.addEventListener("click", () => {
//   let value = eval(input_field.value);
//   input_field.value = value;
// });

// operators function buttons - NOT WORKING
// {
//   if (operator == "+") {
//     result = number1 + number2;
//   } else if (operator == "-") {
//     result = number1 - number2;
//   } else if (operator == "x") {
//     result = number1 * number2;
//   } else if (operator == "÷") {
//     result = number1 / number2;
//   } else if (operator == "%") {
//     result = (number2 / number1) * 100;
//   } else if (operator == "√") {
//     result = Math.sqrt(number1);
//   }

//   // display the result
//   console.log(`${number1} ${operator} ${number2} = ${result}`);
// }
