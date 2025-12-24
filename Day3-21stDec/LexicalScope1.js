const globalvariable="Itview"
function outer()
{
    const outervariable="Institute"
    console.log(globalvariable+outervariable)
    function inner1()
    {
      const innervariable="Pune"
      console.log(outervariable+globalvariable+innervariable)
    }
    function inner2()
    {
        console.log(outervariable+innervariable)
    }

   inner1()
   inner2()
}

outer()