const a="Hello"
let closurefunction=()=>{
    const b="Bye"
    console.log(a+b)
    function inner(){
        return (a+b)
    }
    return inner
}
let result=closurefunction()
console.log(result())