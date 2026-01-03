function operate(a,b,operation)
{
   return ()=>{
     const operationresult=operation(a,b)
     return operationresult*operationresult
   }
}

let result=operate(2,3,(a,b)=>{
    return a+b
})
console.log(result())