class compex{
    constructor(real,img){
        this.real=real;
        this.img=img;
        console.log('created');
        //console.log(real+img);
    }
    add(num){
        let r=this.real + num.real;
        let i=this.img + num.img;
        return new compex(r,i);
    }
    get(){
        console.log(this.real+' '+this.img);
    }
    set(real=this.real,img=this.img){
        this.real=real;
        this.img=img;
    }
}
let num1=new compex(3,-5);
let num2=new compex(2,-5);
num1.add(num2).get();
num1.set(2);
num1.get();
num1.set(3,4);
num1.get();
