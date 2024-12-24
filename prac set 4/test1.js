console.log("bar\"".length)

let str="My name is unknown and it is true"

console.log(str.includes("name"));

console.log(str.startsWith("My"));

console.log(str.endsWith("true"));

console.log(str.toLowerCase());

let str2="Please give Rs 1000";
let idx=str2.indexOf("Rs");
idx+=3;
console.log(str2.slice(idx));

str2[4]='n';
console.log(str2);