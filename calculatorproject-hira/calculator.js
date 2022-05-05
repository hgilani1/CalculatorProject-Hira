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

// display square root
const displayNumberSquare = document.getElementById("√");
displayNumberSquare.addEventListener("click", () => inputDisplayNumber("√"));

// display percentage
const displayNumberPercentage = document.getElementById("%");
displayNumberPercentage.addEventListener("click", () =>
  inputDisplayNumber("%")
);

// display multiply
const displayNumberMultiply = document.getElementById("x");
displayNumberMultiply.addEventListener("click", () => inputDisplayNumber("x"));

// display divide
const displayNumberDivide = document.getElementById("÷");
displayNumberDivide.addEventListener("click", () => inputDisplayNumber("÷"));

// display plus
const displayNumberPlus = document.getElementById("+");
displayNumberPlus.addEventListener("click", () => inputDisplayNumber("+"));

// display minus
const displayNumberMinus = document.getElementById("-");
displayNumberMinus.addEventListener("click", () => inputDisplayNumber("-"));

//display enter
const displayNumberEnter = document.getElementById("result");
displayNumberEnter.addEventListener("click", () => inputDisplayNumber("="));

// display decimal
const displayNumberDot = document.getElementById("kbdot");
displayNumberDot.addEventListener("click", () => inputDisplayNumber("."));

// display only one equal sign
const inputNumberEnter = () => {
  if (displayNumberEnter.length > 1) return;
};
// display plusminus button
// const displayPlusminus = document.getElementById("kbplusminus");
// displayPlusminus.addEventListener("click", () => inputDisplayNumber("±"));

// function to display input on display screen
let number = "";
const inputDisplayNumber = (n) => {
  number += n;
  if (number.length > 10) return;
  return (document.getElementById("displays").innerText = number);
};

// Clear button
const displayNumberClear = document.getElementById("clear");
displayNumberClear.addEventListener("click", () => inputNumberClear());

// Clear button function
let numberClear = " ";
const inputNumberClear = () => {
  numberClear = clearInterval();
  return (document.getElementById("displays").innerText = numberClear);
};

// function clear() {
//   current = "0";
//   document.displayNumberClear.value = current;
// }

// backspace button function -NOT WORKING - getting undefined

const displayNumberDelete = document.getElementById("del");
displayNumberDelete.addEventListener("click", () =>
  inputNumberDelete(numberDelete.pop)
);

let numberDelete = "";
const inputNumberDelete = () => {
  numberDelete = " ";
  return (document.getElementById("displays").innerText = numberDelete.pop);
};
// const displayNon = document.getElementById("del");
// displayNon.addEventListener("click", () => slice(0, displayNon.length - 1));
// console.log(displayNumber);
// };

// result.addEventListener("click", () => {
//   let value = eval(input_field.value);
//   input_field.value = value;
// });

let number1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
let number2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
let operator = ["+", "-", "x", "÷", "%", "√"];

// operators function buttons - NOT WORKING
const numberDisplay = document.getElementsByClassName("rightside");
numberDisplay.addEventListener("click", () => inputNumberDisplay(""));

let ops = " ";
const inputOps = () => {
  result = `${number1}` + `${number2}`;
  if (operator === "+") {
    result = `${number1}` + `${number2}`;
  }
  if (operator === "-") {
    result = `${number1}` - `${number2}`;
  }
  if (operator === "x") {
    result = `${number1}` * `${number2}`;
  }
  if (operator === "÷") {
    result = `${number1}` / `${number2}`;
  }
  if (operator === "%") {
    result = (`${number1}` / `${number2}`) * 100;
  }
  if (operator === "√") {
    result = Math.sqrt(`${number1}`);
  }

  // function of operators in use
  displayNumberEnter.addEventListener("click", () =>
    inputNumberResult(numberResult)
  );
  let numberResult = "";
  const inputNumberResult = () => {
    numberResult = `${number1} ${operator} ${number2} = ${result}`;
    return (document.getElementById("displays").innerText = inputOps);
  };

  //   // display the result
  // console.log(
  //   `${inputDisplayNumber} ${operator} ${inputDisplayNumber} = ${result}`
  // );

  // function add(item1, item2) {
  //   let answer = 0;
  //   answer = item1 + item2;
  //   return answer;
  // }
};
