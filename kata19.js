const queenThreat = function(boardThreat) {
  let [queens, whiteQ, blackQ] = [[], [], []];
  for (let row = 0; row < boardThreat.length; row++) {
    for (let col = 0; col < boardThreat[row].length; col++) {
      if (boardThreat[row][col] === 1)
        queens.push([row, col]);
    }
  }
  whiteQ = queens[0];
  blackQ = queens[1];
  return (whiteQ[0] === blackQ[0] ||
    whiteQ[1] === blackQ[1] ||
    Math.abs(whiteQ[0] - blackQ[0]) === Math.abs(whiteQ[1] - blackQ[1])) ? true : false;
};

const generateBoard = function(whiteQ, blackQ) {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  board[whiteQ[0]][whiteQ[1]] = 1;
  board[blackQ[0]][blackQ[1]] = 1;
  return board;
};

let whiteQueen = [2, 4];
let blackQueen = [5, 1];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard)); // true

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard)); // false
