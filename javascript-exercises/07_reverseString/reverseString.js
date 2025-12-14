const reverseString = function(word) {
    len = word.length;
    let string = "";

    for(i = len-1;i>=0;i--){
        string+=word[i];
    }

    return string
};

// Do not edit below this line
module.exports = reverseString;
