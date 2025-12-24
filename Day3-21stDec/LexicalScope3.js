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
         return (outervariable+innervariable)
    }
    return inner
}
console.log(outer())
// outer()