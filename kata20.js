const blocksAway = function (directions) {
  const blocks = { east: 0, north: 0 }
  let pointing = 'N';

  for (let i = 0; i <= directions.length; i += 2) {
    if (directions[i] === 'right') {
      switch (pointing) {
        case 'N':
          blocks.east += directions[i + 1];
          pointing = 'E';
          break;
        case 'E':
          if (blocks.north !== 0) {
            blocks.north -= directions[i + 1];
            pointing = 'S';
          }
          else {
            blocks.east += directions[i + 1];
            pointing = 'E';
          }
          break;
        case 'S':
          if (blocks.east !== 0) {
            blocks.east -= directions[i + 1];
            pointing = 'W';
          }
          else {
            blocks.north -= directions[i + 1];
            pointing = 'S';
          }
          break;
        case 'W':
          blocks.north += directions[i + 1];
          pointing = 'N';
          break;
      }
    } else if (directions[i] === 'left') {
      switch (pointing) {
        case 'N':
          if (blocks.east !== 0) {
            blocks.east -= directions[i + 1];
            pointing = 'W';
          }
          else {
            blocks.north += directions[i + 1];
            pointing = 'N';
          }
          break;
        case 'E':
          blocks.north += directions[i + 1];
          pointing = 'N';
          break;
        case 'S':
          blocks.east += directions[i + 1];
          pointing = 'E';
          break;
        case 'W':
          if (blocks.north !== 0) {
            blocks.north -= directions[i + 1];
            pointing = 'S';
          }
          else {
            blocks.east -= directions[i + 1];
            pointing = 'W';
          }
          break;
      }
    }
  }
  return blocks;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}