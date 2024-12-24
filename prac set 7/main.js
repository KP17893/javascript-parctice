let navhead=document.getElementsByTagName("li");
let lis=Array.from(navhead);
lis.forEach(element => {
    element.style.backgroundColor="cyan";
})
navhead[0].firstElementChild.style.color="black";
