document.getElementById("google").addEventListener("click", function() {
    window.open('https://www.google.com/');
})
document.getElementById("face").addEventListener("click", function() {
    window.open('https://www.facebook.com/');
})

setInterval(function() {
    document.getElementById("glow").classList.toggle("light");
},300);