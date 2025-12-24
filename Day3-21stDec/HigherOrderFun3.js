function operand(a,b,operation )
{
    return operation(a,b)
}

console.log(operand(2,3,function add(a,b)
{
    return a+b
}))
