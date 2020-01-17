const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const copyEl = document.getElementById("copy");

// Generator functions http://www.net-comber.com/charset.html
const randomFunc = {
  upper: addUppercase,
  lower: addLowercase,
  number: addNumbers,
  symbol: addSymbols
};

const addUppercase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const addLowercase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const addNumbers = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const addSymbols = () => {
  const symbols = "!@#$%^&*()-+=><?.,[]{}";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(addLowercase());
console.log(addUppercase());
console.log(addNumbers());
console.log(addSymbols());