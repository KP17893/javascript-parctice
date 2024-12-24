const obj={
    harry:98,
    rohan:70,
    vicky:45
}

for(let i=0;i<Object.keys(obj).length;i++){
    console.log("marks of " + Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]])
}

for(let a in obj){
    console.log("marks of " + a + " is " + obj[a]);

}

// let cor=8;
// let i=0;
// while(i!=cor){
//     i=prompt("enter a number");
//     console.log("try again");
// }

mean=(a,b,c,d,e)=>{
    console.log("mean is "+(a+b+c+d+e)/5);
}
mean(1,2,3,4,5);