//Spread Operator (...)
//Use: to expand the array elements
//1. copy 

const arr1=[10,20,30] //1000 memory address
console.log(arr1) //normal copy 
const arr2=[...arr1] //shallow copy 
console.log(arr2)
arr2.push(34)
console.log(arr2) //[10,20,30,34]
console.log(arr1) //[10,20,30]