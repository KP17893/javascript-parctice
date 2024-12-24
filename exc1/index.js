
function getInt(){

    let num=Math.floor(Math.random()*101)
    return num;

}
while(1){
    let a=parseInt(prompt("What is your number?"));
    if(a==getInt()){
        alert("correct");
    }
    else{
        alert("incorrect");
    }
}
