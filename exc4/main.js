let h=0;
let m=0;
let s=0;
let second=document.getElementById("sec");
let minute=document.getElementById("min");
let hour=document.getElementById("hour");
setInterval(()=>{
    s++;
    if(s===60){
        s=0;
        m++;
    }
    if(m===60){
        h++;
    }
    second.innerHTML=s;
    minute.innerHTML=m;
    hour.innerHTML=h;
},1000)