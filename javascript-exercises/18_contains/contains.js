const contains = function(object,word) {
    const values = Object.values(object);

    if(values.includes(word)){
        return true
    }
    
    const nestedObjects = values.filter(
        (value) => typeof(value)==='object' && value!==null
    )

    return nestedObjects.some((nestedObject) => 
        contains(nestedObject,word)
    )

    return false
};
  
// Do not edit below this line
module.exports = contains;
