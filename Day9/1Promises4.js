const promisethird=new Promise(function (resolve, reject){
    //Asynchronous task
    console.log("Enter in promise 3")
    setTimeout(function (){
        console.log("Async Task 3")
        resolve({userName:"Itview",email:"itview@gmail.com"})
    },5000)
})

//cosume the promise
promisethird.then(function(user){
    console.log("Promise 1 Resolved ")
    console.log(user)
})