class Human{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    walk(){
        console.log(`${this.name} is walking as human`);
    }
}
class Student extends Human{
    constructor(name,age) {
        super(name,age);

    }
    walk() {
        console.log(`${this.name} is walking as student`);
    }

}

let jk=new Student('joker',23);
jk.walk();
console.log(jk instanceof Student);
console.log(jk instanceof Human);