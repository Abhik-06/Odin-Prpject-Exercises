const pascal = function(num) {
    if(num==1){
        return [1]
    }
    
    const result = [1];
    const previousLine = pascal(num - 1);
    previousLine.forEach((number,i) => {
        const rightNeighbor = previousLine[i+1] ?? 0;
        result.push(number + rightNeighbor);
    });

    return result

};
  
// Do not edit below this line
module.exports = pascal;
