// const loadScripts = async (src) => {
//     let script = document.createElement('script');
//     return new Promise((resolve, reject) => {
//         script.src=src;
//         script.type = 'text/javascript';
//         script.onload = () => {
//             resolve(src)
//
//         }
//         document.head.append(script);
//     })
// }
//
// const main= async ()=>{
//     let a= await loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
// }
// main();


//q3
// let p= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("this not acceptable"));
//     },2000)
// })
// let a=async ()=>{
//     try{
//         let c=await p();
//         console.log(c);
//     }
//     catch(err){
//         console.log("ohoo error");
//     }
// }
// a();

let p1= async ()=>{
    return new Promise((resolve,reject )=>{
        setTimeout(()=>{
            resolve(11)
        },2000)
    })
}
let p2= async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(12);
        },1000)
    })
}
let p3=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(13);
        },3000)
    })
}

const run=async()=>{
    let a1=await p1();
    let a2=await p2();
    let a3=await p3();
    let allatone=await Promise.all([a1,a2,a3]);
    console.log(allatone);
}
run();
