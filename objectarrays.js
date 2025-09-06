let person={
    name:"jyothi",
    age:18

}
console.log(person.name)
console.log(person["name"])
//destructuring assignment
const {name,age}=person;
console.log(name)
console.log(age)
let fruit=["apple","orrange"]
console.log(fruit[0])
//transform each element
numbers=[1,2,3,4,5]
let square=numbers.map((num)=>num*num);
console.log(square)
//filter
let even=numbers.filter((num)=>num%2==0)
console.log(even)
//reduce
let sum=numbers.reduce((present,num)=>present+num,0)
console.log(sum)

let array=[{
    name:"jyothi",
    age:18,
    marks:57
},
 {
    name:"siva",
    age:19,
    marks:57},
{name:"sahitya",age:19,marks:89}]
let max=0
let x=0
let nam=""
for(let arra of array){
    console.log(arra)
    x=arra.marks

    if(x>max){
        max=x
        nam=arra.name
    }
}
console.log(nam,"is topper with",x,"marks")

