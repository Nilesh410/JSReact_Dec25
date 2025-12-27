const arr=[12,34,7,45,78,39]
//Return the average of all elements of array 

const result=arr.reduce((sum,ele)=>{
    return sum=sum+ele
},0)/arr.length
console.log(result)

