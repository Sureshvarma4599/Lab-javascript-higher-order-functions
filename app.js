//example for slice method
const foods = [ "biryani","kabab","noodles","fries","manchuria"];
const modifiedFood = foods.slice(1,4);
console.log(modifiedFood);


//example for splice method
foods.splice(1,0,"curd rice","lemon rice");
console.log(foods);


//example for even numbers using filter method
var numberArray = [2,4,24,35,98,72];
var evenNumbers = numberArray.filter(function (x) {
  if (x % 2 === 0 || x === 0) {
    return x;
  }
});
console.log( "even numbers :"+evenNumbers);

//example for prime numbers using filter method
var numberArray = [20,5,35,37,40,1,4,99]

numberArray = numberArray.filter((num) => {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
});

console.log( "the prime numbers are :" + numberArray);
//example for non prime numbers using filter method
var numberArray = [20,5,35,37,40,1,4,99]

numberArray = numberArray.filter((num) => {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return true;
  }
  return false;
});

console.log( "the non prime numbers are :" + numberArray);


//Function #7: Reduce

let x=[2,3,,5,10];
let sum = x.reduce(function(initial,item){
return initial*item;
},1);
console.log("multiplied value = " + sum);

//square root  function
var myArray = [11, 34, 20, 5, 53, 16];
var  z = myArray.map(function(item){
  return item*item;
});console.log("square root of a function = " + z );