let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

let operator = prompt("Enter operator ");

if (operator == "+") {
  document.write(firstNumber + secondNumber);
}

if (operator == "-") {
  document.write(firstNumber - secondNumber);
}

if (operator == "*") {
  document.write(firstNumber * secondNumber);
}

if (operator == "/") {
  document.write(firstNumber * secondNumber);
}
