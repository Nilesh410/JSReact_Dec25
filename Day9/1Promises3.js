const promisefirst=new Promise(function (resolve, reject){
    //Asynchronous task
    console.log("Enter in promise 1")
    setTimeout(function (){
        console.log("Async Task 1")
        resolve()
    },5000)
})

//cosume the promise
promisefirst.then(function(){
    console.log("Promise 1 Resolved ")
})


new Promise(function (resolve, reject){
    //Asynchronous task
    console.log("Enter in promise 2")
    setTimeout(function (){
        console.log("Async Task 2")
        resolve()
    },5000)
}).then(function(){
    console.log("Promise 2 Resolved ")
})