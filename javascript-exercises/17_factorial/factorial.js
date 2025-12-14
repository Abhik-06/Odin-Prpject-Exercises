const factorial = function(num) {
    if(!Number.isInteger(num) || !Number.isFinite(num) || num<0){
        return 
    }

    let fact = 1;
    for(let i = 1;i <= num;i++){
        fact*=i;
    }

    return fact
};

// Do not edit below this line
module.exports = factorial;