const findTheOldest = function(arr) {
    let oldage = 0;
    let oldest = '';
    for(i = 0;i < arr.length;i++){
        if((arr[i].yearOfDeath - arr[i].yearOfBirth) > oldage){
            oldest = arr[i].name;
            oldage = arr[i].yearOfDeath - arr[i].yearOfBirth;
        }
    }

    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
