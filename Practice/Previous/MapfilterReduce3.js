const obj=[
    {std_name:"ABC",hindi:67,marathi:45,eng:89},
    {std_name:"XYZ",hindi:74,marathi:56,eng:67}
]
const result=obj.map(ele=>{
    let percentage=(ele.eng+ele.hindi+ele.marathi)/300*100;
    return percentage;
}).filter(ele=>ele>60.00)
console.log(result)