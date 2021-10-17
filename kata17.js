const urlDecode = function(text) {
  const keyValues = text.split('&');
  let urlDecoded = {};
  for (const keyValue of keyValues) {
    const key = keyValue.split('=')[0];
    const value = keyValue.split('=')[1].replace(/\W[0-2]{2}/g, ' ');
    urlDecoded[key] = value;
  }
  return urlDecoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"