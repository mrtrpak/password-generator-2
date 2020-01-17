// DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const copyEl = document.getElementById("copy");

// Generator functions http://www.net-comber.com/charset.html
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

const randomFunc = {
  upper: addUppercase,
  lower: addLowercase,
  number: addNumbers,
  symbol: addSymbols
};

const generatePassword = (length, lower, upper, number, symbol) => {
  let generatedPass = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
    item => Object.values(item)[0]
  );

  if(typesCount === 0) {
    return;
  }

  // += is the add assignment operator which takes current var and adds onto it
  for(let i = 0; i < length; i+= typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      generatedPass += randomFunc[funcName]();
    });
  }

  console.log(generatedPass.slice(0, length));
  const finalPass = generatedPass.slice(0, length);
  return finalPass;
}

generateEl.onclick = () => {
  // adding the plus beforehand turns it into a number
  const length = +lengthEl.value;
  const withLower = lowercaseEl.checked;
  const withUpper = uppercaseEl.checked;
  const withNumber = numbersEl.checked;
  const withSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    length, withLower, withUpper, withNumber, withSymbol
  );
};

copyEl.onclick = () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert('password copied to clipboard');
};

console.log(addLowercase());
console.log(addUppercase());
console.log(addNumbers());
console.log(addSymbols());