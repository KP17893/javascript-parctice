
function getInt(){

    let num=Math.floor(Math.random()*11)
    return num;

}
while(1){
    let a=parseInt(prompt("What is your number between 1 to 10 ?"));
    let cc=getInt();
    if(a===cc){
        alert("correct");
    }
    else{
        alert("incorrect");
    }
}
