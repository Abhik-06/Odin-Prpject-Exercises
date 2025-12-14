const add = function(n1,n2) {
  return n1 + n2
};

const subtract = function(n1,n2) {
	return n1 - n2
};

const sum = function(arr) {
	let sum = 0
  arr.forEach(element => {
    sum+=element
  });

  return sum
};

const multiply = function(arr) {
  let prod = 1
  arr.forEach(element =>{
    prod*=element
  })

  return prod
};

const power = function(coeff,pow) {
  let ans = coeff
  for(i = 2;i <= pow;i++){
    ans*=coeff
  }

  return ans
};

const factorial = function(num) {
	let fact = 1
  for(i = 1;i <= num;i++){
    fact*=i
  }

  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
