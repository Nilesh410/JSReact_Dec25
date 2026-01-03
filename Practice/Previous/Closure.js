function operate(a,b,operation)
{
   return operation(a,b)
}

function operation(a,b)
{
    return a+b
}

console.log(operate(2,3,operation))

