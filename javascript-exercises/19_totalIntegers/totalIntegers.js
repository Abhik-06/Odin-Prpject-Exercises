const totalIntegers = function(data) {
    if(typeof(data)!=='array' && typeof(data)!=='object'){
        return
    }
    
    const values = Object.values(data);

    return values.reduce((total,value) =>{
        if(typeof(value)==='number' && Number.isInteger(value)){
            return total+1
        }

        if(typeof(value)==='object' && value!==null){
            return total + totalIntegers(value)
        }

        return total
    },0);
};
  
// Do not edit below this line
module.exports = totalIntegers;
