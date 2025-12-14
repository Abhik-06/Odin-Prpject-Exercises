const palindromes = function (string) {
    let clrstring = string.replace(/\s/g,'');
    clrstring = clrstring.replace(/\p{P}/gu,'');

    let newstring = '';
    for(let i = clrstring.length - 1;i>=0;i--){
        newstring+=clrstring[i];
    }

    if(newstring.toLowerCase()==clrstring.toLowerCase()){
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
