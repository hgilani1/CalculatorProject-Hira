const numbers = [];
for (let i = 65; i < 91; i++) {
  numbers.push(String.fromCharCode(i));
}

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

// display enter
// const displayNumberEnter = document.getElementById("result");
// displayNumberEnter.addEventListener("click", () => inputDisplayNumber(result));

// display decimal
const displayNumberDot = document.getElementById("kbdot");
displayNumberDot.addEventListener("click", () => inputDisplayNumber("."));

// display only one equal sign
// const inputNumberEnter = () => {
//   if (displayNumberEnter.length > 1) return;
// };

// display plusminus button
// const displayPlusminus = document.getElementById("kbplusminus");
// displayPlusminus.addEventListener("click", () => inputDisplayNumber("±"));

// function to display first input on screen
let number = "";
const inputDisplayNumber = (n) => {
  number += n;
  if (number.length > 10) return;
  return (document.getElementById("displays").innerText = number);
};

// let number1 = "";
// const inputDisplayNumberOne = (m) => {
//   number1 += m;
//   if (number1.length > 10) return;
//   return (document.getElementById("displays").innerText = number1);
// };

// Clear button
const displayNumberClear = document.getElementById("clear");
displayNumberClear.addEventListener("click", () => inputNumberClear());

// Clear button function

const inputNumberClear = () => {
  document.getElementById("displays").innerText = "";
  number = "";
};

// backspace button function -NOT WORKING

// const displayNumberDelete = document.getElementById("del");
// displayNumberDelete.addEventListener("click", () => inputNumberDelete());

// let inputNumberDelete = () => {
//   myNumber = myNumber.slice(0, myNumber.length - 1);
//   return myNumber;
// };

// display square root
const displayOperatorSquare = document.getElementById("√");
displayOperatorSquare.addEventListener("click", () =>
  inputDisplayOperator("√")
);

// display percentage
const displayOperatorPercentage = document.getElementById("%");
displayOperatorPercentage.addEventListener("click", () =>
  inputDisplayOperator("%")
);

// display multiply
const displayOperatorMultiply = document.getElementById("x");
displayOperatorMultiply.addEventListener("click", () =>
  inputDisplayOperator("x")
);

// display divide
const displayOperatorDivide = document.getElementById("÷");
displayOperatorDivide.addEventListener("click", () =>
  inputDisplayOperator("÷")
);

// display plus
const displayOperatorPlus = document.getElementById("+");
displayOperatorPlus.addEventListener("click", () => inputDisplayOperator("+"));

// display minus
const displayOperatorMinus = document.getElementById("-");
displayOperatorMinus.addEventListener("click", () => inputDisplayOperator("-"));

// function operator buttons
let operator = "";
const inputDisplayOperator = (o) => {
  operator += o;
  number = myNumber;
  document.getElementById("displays").innerText = operator;
};

var myNumber = number2;
var number2 = "";

const inputOperator = (myNumber, number2, operator) => {
  let result = "";
  if (operator === "+") {
    result = myNumber + number2;
  }
  if (operator === "-") {
    result = myNumber - number2;
  }
  if (operator === "x") {
    result = myNumber * number2;
  }
  if (operator === "÷") {
    result = myNumber / number2;
  }
  if (operator === "%") {
    result = (myNumber / number2) * 100;
  }
  if (operator === "√") {
    result = Math.sqrt(myNumber);
  }
  console.log(result);
  // switch (this.result) {
  //   case "+":
  //     result = myNumber + number2;
  //     break;
  //   case "-":
  //     result = myNumber - number2;
  //     break;
  //   case "x":
  //     result = myNumber * number2;
  //     break;
  //   case "÷":
  //     result = myNumber / number2;
  //     break;
  //   case "%":
  //     result = (myNumber / number2) * 100;
  //     break;
  //   case "√":
  //     result = Math.sqrt(myNumber);
  //     break;
  //   default:
  //     return;
  // }
};

// display enter

const displayNumberEnter = document.getElementById("result");
displayNumberEnter.addEventListener("click", () =>
  inputOperator(myNumber, operator, number2)
);

// function for result
const inputNumberResult = (r) => {
  result += r;
  number = number2;
  document.getElementById("displays").innerText = result;
};

//   // display the result
// console.log(
//   `${inputDisplayNumber} ${operator} ${inputDisplayNumber} = ${result}`
// );

// function add(item1, item2) {
//   let answer = 0;
//   answer = item1 + item2;
//   return answer;
