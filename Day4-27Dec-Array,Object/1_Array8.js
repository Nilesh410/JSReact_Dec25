const arr=[12,34,7,45,78,39]
//Return the even no from given array in array form 

const result=arr.filter((ele)=>{
    if(ele%2==0)
        return ele
})
console.log(result)

