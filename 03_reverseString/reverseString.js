const reverseString = function(str) {
    let splitStr,arrayRev;
    let stringFinal;
    splitStr = str.split('');
    arrayRev = splitStr.reverse();
    stringFinal = arrayRev.join('');
  return stringFinal;
};

// Do not edit below this line
module.exports = reverseString;
