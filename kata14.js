const calculateChange = function (total, cash) {
  let changeInCents = cash - total;

  const denominators = {
    twentyDollars: 2000,
    tenDollars: 1000,
    fiveDollars: 500,
    twoDollars: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  }

  const change = {};

  for (const denominator in denominators) {
    if (changeInCents >= denominators[denominator]){
      const count = Math.floor(changeInCents / denominators[denominator]);
      change[denominator] = count;
      changeInCents = changeInCents - (denominators[denominator] * count);
    }
  }

  return change;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));