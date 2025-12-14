const fibonacci = function(num) {
    if(typeof(num)=='number' && Number.isFinite(num) && num<0){
        return 'OOPS'
    }

    num = Number(num);

    if(num<=1){
        return num
    }
    let a = 0;
    let b = 1;
    let c = 1;
    let sum = 0;

    for(i = 2;i <= num;i++){
        sum = a + b;
        a = b;
        b = c;
        c = a+b;
    }

    return sum
};

// Do not edit below this line
module.exports = fibonacci;
