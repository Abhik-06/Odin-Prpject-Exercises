const leapYears = function(year) {
    ok4 = 0;
    ok100 = 0;
    ok400 = 0;

    if(year%4==0){
        ok4 = 1;
        if(year%100!=0){
            return true
        }
    }
    if(year%400==0){
        return true
    }

    return false
};

// Do not edit below this line
module.exports = leapYears;
