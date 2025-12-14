const permutations = function(arr) {
    if(arr.length==0){
        return [[]]
    }

    const result = []

    for(let i = 0;i < arr.length;i++){
        const currnum = arr[i];
        const remaining = arr.slice(0,i).concat(arr.slice(i + 1));
        const subperms = permutations(remaining)

        for(const subperm of subperms){
            result.push([currnum,...subperm])
        };
    }

    return result
};
  
// Do not edit below this line
module.exports = permutations;
