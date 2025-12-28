//Spread Operator (...)
//Use: to expand the array elements
//1. copy 
//2. merge two array elements

const arr1=[10,20,30] //1000 memory address
const arr2=[40,50,60]
console.log(arr1) 
console.log(arr2)
const arr3=[...arr1,...arr2]
console.log(arr3)