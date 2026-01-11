const promisefour=new Promise(function (resolve, reject){
    //Asynchronous task
    console.log("Enter in promise 4")
    setTimeout(function (){
        console.log("Async Task 4")
        resolve({userName:"Itview",email:"itview@gmail.com"})
    },5000)
})

//cosume the promise
promisefour.then(function(user){
    console.log("Promise 1 Resolved ")
    console.log(user)
    return user.userName
}).then(function(userData)
 {
   console.log(userData)
   console.log("2nd then completed")
 })
