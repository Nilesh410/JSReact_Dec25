function display(f1)
{
    console.log("From Higher Order Function")
    f1(5)
}

function callbackfunction(num)
{
    console.log("From Call back Function")
    console.log(num)
}

display(callbackfunction)