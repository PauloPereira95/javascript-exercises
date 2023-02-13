const sumAll = function(min,max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min; // TEMP = 123
      min = max; // MIN = 4
      max = temp; // MAX = 123
      // TROCA A ORDEM DE VALORES
    }
    let sum = 0;
    for (let i = min /* I = 4 */; i < max /* MAX = 123 */ + 1; i++) {
      sum += i;
    }
    return sum;
  };


// Do not edit below this line
module.exports = sumAll;

// EXEMPLO VALORES ENVIADO COMO ARGUMENTO 
/*
  1sumAll(123, 4))
  MIN = 123
  MAX = 4

*/
