const urlEncode = function(text) {
  let convertedString = "";
  let i = 0, j = text.length - 1;
  //Removing all the leading whitespaces
    while (text[i] === ' '){
      i++;
    }
  //Removing all the whitespace at the end
    while (text[j] === ' '){
      j--;
    }

    for(let k = i; k <= j; k++){
      if(text[k] === ' '){
        convertedString = convertedString + '%20';
      } else {
        convertedString = convertedString + text.charAt(k);
      }
  }
return convertedString;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));