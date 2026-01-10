function set1(callback){
    setTimeout(()=>{
        console.log("set 1 completed");
        callback();
    },1000)
}
function set2(callback){
    setTimeout(()=>{
        console.log("set 2 completed");
        callback();
    },1000)
}
function set3(callback){
    setTimeout(()=>{
        console.log("set 3 completed");
        callback();
    },1000)
}
set1(()=>{
    set2(()=>{
        set3(()=>{
            console.log("All steps are completed")
        })
    })
})