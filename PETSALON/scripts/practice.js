let students = ["Adam","Brandon","Anthony","Marquice"];
let ages = [23,25,31,32];
//object literal
let s1 = {
    name: "Adam",
    age: 28,
    hobbies: ["Go to gym", "Drink water", "Study for FSDI"],
    address: {
        country:"USA",
        city:"San Diego",
        street:"Center",
        number:"1234"
    }
}
let s2 = {
    name: "Brandon",
    age: 25,
    hobbies: ["Code", "Quality family time", "Work from home"],
    address: {
        country:"USA",
        city:"Memphis",
        street:"Parade",
        number:"5678"
    }
}

console.log(s1.age);

//object constructor 

function Student(n,a,g){
    //attributes
    this.name = n;
    this.age = a;
    this.gender = g;
}
// creating new objects using the constructor Student
let sc1 = new Student("Anthony",25,"Male");
let sc2 = new Student("Marquice",26,"Male");

console.log(sc1,sc2);

// create an object constructor and create two objects


