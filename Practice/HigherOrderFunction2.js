function operate(a,b)
{
   return function operation(a,b)
    {
        return a+b
    }
}


let result=operate(2,3)
console.log(result(2,3))