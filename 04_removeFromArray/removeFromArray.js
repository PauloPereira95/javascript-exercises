const removeFromArray = function(arr,...args) {
    let array = arguments[0];
    let nDelete = [...args];

       for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < nDelete.length; j++) {
          if (nDelete.includes(arr[i])){
            array.splice(i,1);
          }
         }
        }
      return array;
  
};

// Do not edit below this line
module.exports = removeFromArray;
