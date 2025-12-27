const arr=[12,34,7,45,78,39]
//Return the even no from given array in array form 

const result=arr.map((ele)=>{
    if(ele%2==0)
        return ele
    else
        return ele+1
})
console.log(result)