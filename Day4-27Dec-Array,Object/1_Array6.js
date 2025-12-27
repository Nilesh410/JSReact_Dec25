const arr=[12,34,7,45,78,39]

// const result=arr.forEach(element => {
//     console.log(element*element)
// });
// Return the array of square of given array elements 
const result=arr.map((ele)=>{
    return (ele*ele)
})

console.log(result)