//Higher Order Function and Call back Function
function operand(a,b,operation )
{
    return operation(a,b)
}

console.log(operand(2,3,(a,b)=>a+b))
//operand : Higher Order Function : bcoz its accept function as parameter as well as return the function 
//call back function : (a,b)=>a+b)