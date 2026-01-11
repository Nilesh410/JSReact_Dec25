const promisefirst=new Promise(function (resolve, reject){
    //Asynchronous task
    console.log("Enter in promise")
    setTimeout(function (){
        console.log("Async Task 1")
        resolve()
    },5000)
})

//cosume the promise
promisefirst.then(function(){
    console.log("Promise 1 Resolved ")
})