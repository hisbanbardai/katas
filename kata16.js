const camel = function (text) {
  let finalString = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      finalString += text[i + 1].toUpperCase();
      i++;
    } else finalString += text[i];
  }
  return finalString;
};

const pascal = function (text) {
  let finalString = text[0] !== " " ? text[0].toUpperCase() : "";
  for (let i = 1; i < text.length; i++) {
    if (text[i] === " ") {
      finalString += text[i + 1].toUpperCase();
      i++;
    } else finalString += text[i];
  }
  return finalString;
};

const snake = function (text) {
  let finalString = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      finalString += "_";
    } else finalString += text[i];
  }
  return finalString;
};

const kebab = function (text) {
  let finalString = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      finalString += "-";
    } else finalString += text[i];
  }
  return finalString;
};

const upper = function (text) {
  let finalString = "";
  for (let i = 0; i < text.length; i++) {
    finalString += text[i].toUpperCase();
  }
  return finalString;
};

const lower = function (text) {
  let finalString = "";
  for (let i = 0; i < text.length; i++) {
    finalString += text[i].toLowerCase();
  }
  return finalString;
};

const title = function (text) {
  let finalString = text[0] !== " " ? text[0].toUpperCase() : " ";
  for (let i = 1; i < text.length; i++) {
    if (text[i] === " ") {
      finalString += text[i];
      finalString += text[i + 1].toUpperCase();
      i++;
    } else finalString += text[i];
  }
  return finalString;
};

const vowel = function (text) {
  let finalString = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if ("aeiou".includes(char)) {
      char = char.toUpperCase();
    }
    finalString += char;
  }
  return finalString;
};

const consonant = function (text) {
  let finalString = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (!"aeiou".includes(char)) {
      char = char.toUpperCase();
    }
    finalString += char;
  }
  return finalString;
};

const makeCase = function (input, caseType) {
  const cases = {
    camel: camel(input),
    pascal: pascal(input),
    snake: snake(input),
    kebab: kebab(input),
    title: title(input),
    vowel: vowel(input),
    consonant: consonant(input),
    upper: upper(input),
    lower: lower(input),
  };
  if (!Array.isArray(caseType)){
     return cases[caseType];
  }
  
  let finalString = input;
  for (let i = 0; i < caseType.length; i++){
    finalString = makeCase(finalString, caseType[i]);
  }
  return finalString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake", "lower"]));
