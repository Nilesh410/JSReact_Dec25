function operand(a,b,operation )
{
    return operation(a,b)
}

console.log(operand(2,3,(a,b)=>
{
    return a+b
}))
