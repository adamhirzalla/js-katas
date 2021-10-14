const urlEncode = function (text) {
  let encoded = "";
  text = text.trim(); // clears starting and ending spaces
  for (let index of text) {
    if (index === " ") encoded += "%20";
    else encoded += index;
  }
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));