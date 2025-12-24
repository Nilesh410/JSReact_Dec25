function add(...values)
{
    console.log(values[0]+values[1])
}
add(2,3,4,5)

const [a,b,c,...d]=[10,20,30,40,50]
console.log(a,b,c,d)