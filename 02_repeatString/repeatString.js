const repeatString = function(string,nVezes) {
    let stringAdd='';
    if(nVezes < 0){
        return stringAdd ='ERROR';
    } else {
        for (let i = 0; i < nVezes; i++) {
            stringAdd += string;
        }
        return stringAdd;
    }
};

// Do not edit below this line
module.exports = repeatString;
