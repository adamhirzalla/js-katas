/* eslint-disable no-fallthrough */
const calculateChange = function(total, cash) {
  const denoms = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };

  let sum = cash - total;
  let change = {};

  switch (true) {
  case (sum >= denoms.twentyDollar):
    if (Math.floor(sum / 2000) !== 0)
      change.twentyDollar = Math.floor(sum / 2000);
    sum = sum % denoms.twentyDollar;
  case sum >= denoms.tenDollar:
    if (Math.floor(sum / 1000) !== 0)
      change.tenDollar = Math.floor(sum / 1000);
    sum = sum % denoms.tenDollar;
  case sum >= denoms.fiveDollar:
    if (Math.floor(sum / 500) !== 0)
      change.fiveDollar = Math.floor(sum / 500);
    sum = sum % denoms.fiveDollar;
  case sum >= denoms.twoDollar:
    if (Math.floor(sum / 200) !== 0)
      change.twoDollar = Math.floor(sum / 200);
    sum = sum % denoms.twoDollar;
  case sum >= denoms.oneDollar:
    if (Math.floor(sum / 100) !== 0)
      change.oneDollar = Math.floor(sum / 100);
    sum = sum % denoms.oneDollar;
  case sum >= denoms.quarter:
    if (Math.floor(sum / 25) !== 0)
      change.quarter = Math.floor(sum / 25);
    sum = sum % denoms.quarter;
  case sum >= denoms.dime:
    if (Math.floor(sum / 10) !== 0)
      change.dime = Math.floor(sum / 10);
    sum = sum % denoms.dime;
  case sum >= denoms.nickel:
    if (Math.floor(sum / 5) !== 0)
      change.nickel = Math.floor(sum / 5);
    sum = sum % denoms.nickel;
  case sum >= denoms.penny:
    if (Math.floor(sum) !== 0)
      change.penny = Math.floor(sum);
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

// Valid denominations are as follows:

// Twenty dollars
// Ten dollars
// Five dollars
// Two dollars
// One dollar
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)
