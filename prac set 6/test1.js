let age;
let check=true;
while(check){
    age=parseInt(prompt("What's Your age? "));
    if(age>=18){
        alert("you can Drive");
        document.body.style.backgroundColor="blue";
    }
    else if(age<0){
        console.error("INVALID AGE");
        break;
    }
    else{
        alert("you cannot Drive");
        document.body.style.backgroundColor="grey";
    }
    check=confirm("want to continue");
}
alert("thank you");
age=parseInt(prompt("enter number"));
if(age>4){
    location.href="https://google.com";
}


