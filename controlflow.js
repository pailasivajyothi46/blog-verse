let marks=90
if (marks>=90){
    console.log("A+ grade")
}else if(marks>=80){
    console.log("a grade")
}else if(marks>=70){
    console.log("b grade")
}
else{
    console.log("fail")
}
let day=7
switch(day){
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednessday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("sunday")
        break;
    default:
        console.log("invalid")
        break;                        

}
let n=3
for(let i=0;i<n;i++){
    console.log(i)
}
let i=0
 while(i<n){
     console.log(i)
     i++
 }
 do{
     console.log(i)
     i++
 }while(i<n)
let colours=["blue","green","black"]
 for(let i=0;i<colours.length;i++){
console.log(colours[i])    
}
for(let colour of colours){
    console.log(colour)
}
let person={
    name:"jyothi",
    age:19,
    colege:"jntu"
}
for(let key in person){
    console.log(`${key}:${person[key]}`)
}
for(i=5;i>0;i--){
    if(i===3){
        continue;
    }

else{
    if(i===2){
        break;
    }
}
console.log(i)
}