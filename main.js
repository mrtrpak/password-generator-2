// DOM elements
const errMsgEl = document.getElementById("errMsg");
const errMsgStyle = errMsgEl.setAttribute("style", "padding: 10px;");
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const copyEl = document.getElementById("copy");

// so errMsg div doesn't show on accident
errMsgEl.setAttribute("style", "");

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
  const symbols = "!@#$%^&*()-+=><?.[]{}";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
  upper: addUppercase,
  lower: addLowercase,
  number: addNumbers,
  symbol: addSymbols
};

const generatePassword = (length, lower, upper, number, symbol) => {
  let generatedPass = [];
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
    item => Object.values(item)[0]
  );

  if(typesCount === 0) {
    return;
  };

  // += is the add assignment operator which takes current variable and adds onto it
  for(let i = 0; i < length; i+= typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      generatedPass += randomFunc[funcName]();
    });
  };

  const randomCharactersArray = generatedPass.split("");
  const shufflePass = () => {
    for (let i = randomCharactersArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [randomCharactersArray[i], randomCharactersArray[j]] = [randomCharactersArray[j], randomCharactersArray[i]];
    }
    return randomCharactersArray;
  };

  const rearrangePassword = shufflePass().toString().replace(/,/g, "");
  const finalPass = rearrangePassword.slice(0, length);
  return finalPass;
};

generateEl.onclick = () => {
  // adding the plus beforehand turns it into a number
  const length = +lengthEl.value;
  const withLower = lowercaseEl.checked;
  const withUpper = uppercaseEl.checked;
  const withNumber = numbersEl.checked;
  const withSymbol = symbolsEl.checked;

  if(!withLower && !withUpper && !withNumber && !withSymbol) {
    errMsgStyle;
    errMsgEl.innerText = "Please choose at least 1 option";
    return;
  } else if (length < 10 || length > 99) {
    errMsgStyle;
    errMsgEl.innerText = "Please chose a number between 10-99";
    return;
  }

  resultEl.innerText = generatePassword(
    length, withLower, withUpper, withNumber, withSymbol
  );

  errMsgEl.setAttribute("style", "");
  errMsgEl.innerText = "";
};

copyEl.onclick = () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    errMsgStyle;
    errMsgEl.innerText = "Please Generate a Password to Copy";
    return;
  }

  errMsgEl.setAttribute("style", "");
  errMsgEl.innerText = "";

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();

  errMsgEl.setAttribute("style", "background-color: limegreen; padding: 10px;");
  errMsgEl.innerText = "Password saved to your clipboard!";
};