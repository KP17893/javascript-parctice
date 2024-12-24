let arr=[1,2,3,4,5];
// let input=1;
// while(input){
//     let a=prompt("enter value");
//     arr.push(parseInt(a));
//     let input=parseInt(prompt("want to ocntinue"));
//
// }

// let input=-1;
// while(!input){
//     input=parseInt(prompt("enter value"));
//     arr.push(a);
// }

let arr2=[10,20,45,23,65,70];
arr2=arr2.filter(x=>x%10===0);
console.log(arr2);

let arr3=arr2.map(x=>{
    return x**2;
});
console.log(arr3);

let a2=[1,2,3,4,5];
console.log(a2.reduce((a,b)=> a*b));