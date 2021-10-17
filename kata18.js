const squareCode = function (message) {
  message = message.replace(/\s/g, '');
  const [charsPerLine, messageSplit, codedMessage] = [Math.ceil(Math.sqrt(message.length)), new Array, new Array];
  let index = 0;
  while (message.slice(index).length >= charsPerLine) {
    messageSplit.push(message.substring(index, index + charsPerLine));
    index += charsPerLine;
  }
  if (message.slice(index) !== undefined)
    messageSplit.push(message.substring(index));
  for (let i = 0; i < charsPerLine; i++) {
    codedMessage.push(messageSplit.map(line => line[i]).join(''));
  }
  return codedMessage.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau