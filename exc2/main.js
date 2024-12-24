let ranI=Math.floor(Math.random() * 3);
let cpu=["S","W","G"];
let sc1=0,sc2=0;
let times=10;
while(times--){
    let ranI=Math.floor(Math.random() * 3);

    let p1=cpu[ranI];
    let p2=prompt("Enter Your Choice 'S','W','G' ");
    if(p1==="S"){
        if(p2==="W"){
            sc1++;
            alert(p1+"\nhahahaha");
        }
        else if(p2==="G"){
            sc2++;
            alert(p1+"\noops");
        }
    }
    else if(p1==="W"){
        if(p2==="S"){
            sc2++;
            alert(p1+"\noops");
        }
        else if(p2==="G"){
            sc1++;
            alert(p1+"\nhahahaha");
        }
    }
    else if(p1==="G"){
        if(p2==="W"){
            sc2++;
            alert(p1+"\noops");
        }
        else if(p2==="S"){
            sc1++;
            alert(p1+"\nhahahaha");
        }
    }
    let check=confirm("want to continue");
    if(!check){
        break;
    }
}
if(sc1>sc2){
    alert("Sorry, Better Luck Next Time");
}
else if(sc1<sc2){
    alert("You Won");
}
else{
    alert("it's a tie");
}