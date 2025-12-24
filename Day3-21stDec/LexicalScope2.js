debugger
const globalvariable="Itview"
function outer()
{
    debugger
    const outervariable=10
    function inner()
    {
        debugger
        const innervariable=20
         return (globalvariable+outervariable+innervariable)
    }
    return inner
}
let result=outer()
console.log(result())
// outer()