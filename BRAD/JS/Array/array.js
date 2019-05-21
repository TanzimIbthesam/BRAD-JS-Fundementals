// const numbers=new Array(1,2,3,4,5);
// console.log(numbers);
const fruits=['apples','bananas','mangoes'];
console.log(fruits);
console.log(fruits[0]);
//If we want to add a new fruit


fruits.push('oranges');
fruits[4]='Malta';
fruits.unshift('Malta');
fruits.pop();//Removes last element
console.log(Array.isArray(fruits));//check if array ids true or false
console.log(fruits.indexOf('apples'));//To check index of a particular element
console.log(fruits);
//';
