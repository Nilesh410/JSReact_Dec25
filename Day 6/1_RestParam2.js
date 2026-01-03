function add(...value)
{
    // value.map((ele)=>{
    //     console.log(ele)
    console.log(value.reduce((result,ele)=>{
        return result +=ele;
    },0))
}

// let arr=[10,20,30,40,50]
add(10,34,56,49,60,67,123)