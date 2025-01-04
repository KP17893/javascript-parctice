let url="https://official-joke-api.appspot.com/random_joke";
let getjoke=function() {


    let response = fetch(url);
    response.then((v) => {
        return v.json();
    }).then(value => {
        let init = `<h2>${value.setup}</h2>
                <h2>${value.punchline}</h2>`;
        console.log(value);
        document.getElementById("joke").innerHTML = init;
    })
    document.getElementById("note").innerHTML=localStorage.getItem("joke");

}
let makejoke=function (){
    let a=prompt("Enter your joke");
    localStorage.setItem("joke",a);
    document.getElementById("note").innerHTML=localStorage.getItem("joke");
}
let del=function(){
    localStorage.removeItem("joke");
    document.getElementById("note").innerHTML=localStorage.getItem("joke");
}

