const number = [];
for (let i = 65; i < 91; i++) {
  number.push(Number.fromCharCode(i));
}
for (let i = 0; i < number.length; i++) {
  const num = number[i];
  const button = document.getElementById("kb" + Number);
  kb0.addEventListener("click", () => inputCharacter(num));
}

const displayOnCurrentLine = (number) => {
  console.log(number);

  number = number.split("");

  const displays = document.getElementById("display");

  const setGuess = (guess) => {
    text.innerText = guess;
  };

  for (let i = 0; i < number.length; i++) {
    setGuess(i, 0, number[i]);
  }
};

const display = (number) => {
  document.getElementById("output").innerText = "word";
};

let currentNumber = "";
const inputCharacter = (c) => {
  if (currentNumber.length >= 5) return; // pre-emptive bug fix

  currentNumber += c;
  displayOnCurrentLine(currentNumber);
};

const backspace = () => {
  currentNumber = currentNumber.slice(0, currentNumber.length - 1);
  console.log(currentNumber);
};

const clear = () => {
  currentNumber = "";
  console.log(currentNumber);
};
