const whereCanIPark = function (spots, vehicle) {
  // lowerCase => occupied
  // upperCase => FREE
  let spot = 'false';
  let x = 0;
  let y = 0;
  for (let r = 0; r < spots.length; r++) {
    for (let c = 0; c < spots[r].length; c++) {
      if ((spots[r][c] === 'R' && (vehicle === 'regular' || vehicle === 'small' || vehicle === 'motorcycle')) ||
        (spots[r][c] === 'S' && (vehicle === 'small' || vehicle === 'motorcycle')) ||
        (spots[r][c] === 'M' && vehicle === 'motorcycle')) {
        x = c;
        y = r;
        spot = '[' + x + ', ' + y + ']';
        return spot;
      }
    }
  }
  return spot;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))