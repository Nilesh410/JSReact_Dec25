const arr=[12,34,7,45,78,39]
// console.log(arr)
//for of loop : original array as it is present 
// for (let ele of arr) {
//     ele=ele*2;
//     console.log(ele)
// }

console.log(arr)
//2. for Each Function : to access individual ele of array and perform the action on that using call back function 
arr.forEach((element,index) => {
    arr[index]=element*2
});
console.log(arr)